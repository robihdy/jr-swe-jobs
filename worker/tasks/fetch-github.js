const fetch = require('node-fetch');
const redis = require('redis');
const { promisify } = require('util');
const keys = require('../keys');

const redisClient = redis.createClient({
  host: keys.redisHost,
  port: keys.redisPort,
  retry_strategy: () => 1000
});

const setAsync = promisify(redisClient.set).bind(redisClient);

const baseURL = 'https://jobs.github.com/positions.json';

const fetchGithub = async () => {
  let resultCount = 1;
  let onPage = 0;
  let allJobs = [];

  while (resultCount > 0) {
    const res = await fetch(`${baseURL}?page=${onPage}`);
    const jobs = await res.json();
    allJobs.push(...jobs);
    resultCount = jobs.length;
    console.log('got', resultCount, 'jobs');
    onPage++;
  }

  console.log('got all', allJobs.length, 'jobs');

  const jrJobs = allJobs.filter(job => {
    const jobTitle = job.title.toLowerCase();
    if (
      jobTitle.includes('senior') ||
      jobTitle.includes('lead') ||
      jobTitle.includes('manager') ||
      jobTitle.includes('architect') ||
      jobTitle.includes('sr.') ||
      jobTitle.includes('sr ')
    ) {
      return false;
    }

    return true;
  });

  console.log('filtered jobs:', jrJobs.length);
  const success = await setAsync('github', JSON.stringify(jrJobs));

  console.log(success);
};

module.exports = fetchGithub;
