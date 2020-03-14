const express = require('express');
const redis = require('redis');
const { promisify } = require('util');
const keys = require('./keys');

const redisClient = redis.createClient({
  host: keys.redisHost,
  port: keys.redisPort,
  retry_strategy: () => 1000
});
const getAsync = promisify(redisClient.get).bind(redisClient);

const app = express();
const port = 5000;

app.get('/jobs', async (req, res) => {
  const jobs = await getAsync('github');
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.send(jobs);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
