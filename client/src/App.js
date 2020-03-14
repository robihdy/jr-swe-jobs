import React, { useEffect, useState } from 'react';
import { Layout, Typography } from 'antd';
import Jobs from './components/Jobs';

import './App.css';

const { Content } = Layout;
const { Title } = Typography;

const JOBS_API_URL = '/api/jobs';

const mockJobs = [
  { title: 'SWE1', company: 'Facebook' },
  { title: 'SWE2', company: 'Amazon' },
  { title: 'SWE3', company: 'Netflix' },
  { title: 'SWE4', company: 'Google' }
];

const fetchJobs = async updateJobs => {
  const res = await fetch(JOBS_API_URL);
  const jobs = await res.json();
  updateJobs(jobs);
};

function App() {
  const [jobList, updateJobs] = useState([]);

  useEffect(() => {
    fetchJobs(updateJobs);
  }, []);

  return (
    <Layout>
      <Title style={{ textAlign: 'center' }}>
        Junior Software Engineering Jobs
      </Title>
      <Content>
        <Jobs jobs={jobList} />
      </Content>
    </Layout>
  );
}

export default App;
