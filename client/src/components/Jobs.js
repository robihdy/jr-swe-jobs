import React from 'react';
import { Typography, Button } from 'antd';
import Job from './Job';

const { Title } = Typography;

export default function Jobs({ jobs }) {
  return (
    <div>
      <Title>Junior Software Engineering Jobs</Title>
      {jobs.map(job => (
        <Job job={job} />
      ))}
    </div>
  );
}
