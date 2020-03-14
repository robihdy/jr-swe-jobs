import React, { useEffect, useState } from 'react';
import Jobs from './components/Jobs';

import './App.css';

const JOBS_API_URL = 'http://localhost:5000/jobs';

const mockJobs = [
  { title: 'SWE1', company: 'Facebook' },
  { title: 'SWE2', company: 'Amazon' },
  { title: 'SWE3', company: 'Netflix' },
  { title: 'SWE4', company: 'Google' }
];

const fetchJobs = async () => {
  const res = await fetch(JOBS_API_URL);
  const jobs = res.json();
  console.log(jobs);
};

function App() {
  const [jobList, updateJobs] = useState([]);

  useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <div className="App">
      <Jobs jobs={jobList} />
    </div>
  );
}

export default App;
