const fetch = require('node-fetch');
const redis = require('redis');
const { promisify } = require('util');

const client = redis.createClient();
// const getAsync = promisify(client.get).bind(client);
const setAsync = promisify(client.set).bind(client);

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
  const success = await setAsync('github', JSON.stringify(allJobs));

  console.log(success);
};

module.exports = fetchGithub;
