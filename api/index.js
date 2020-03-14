const express = require('express');
const redis = require('redis');
const { promisify } = require('util');

const client = redis.createClient();
const getAsync = promisify(client.get).bind(client);

const app = express();
const port = 5000;

app.get('/jobs', async (req, res) => {
  const jobs = await getAsync('github');
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.send(jobs);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
