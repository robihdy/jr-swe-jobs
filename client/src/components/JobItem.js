import React from 'react';
import { Card, Typography } from 'antd';

const { Text } = Typography;

export default function JobItem({ idx, job, handleClick }) {
  return (
    <Card
      className="job-item"
      onClick={() => handleClick(idx)}
      title={job.title}
      extra={job.created_at
        .split(' ')
        .slice(0, 3)
        .join(' ')}
      style={{ margin: '16px 16px' }}
    >
      <Text strong>{job.company}</Text>
      <br />
      <Text>{job.location}</Text>
    </Card>
  );
}
