import React from 'react';
import DOMPurify from 'dompurify';
import { Modal, Button } from 'antd';

const JobDetail = ({ job, handleCancel }) => {
  return (
    <Modal
      visible={true}
      title={`${job.title} - ${job.company}`}
      onCancel={handleCancel}
      footer={[
        <Button type="primary" href={job.url} target="_blank">
          Apply
        </Button>
      ]}
    >
      <div
        className="content"
        dangerouslySetInnerHTML={{
          __html: DOMPurify.sanitize(job.description)
        }}
      ></div>
    </Modal>
  );
};

export default JobDetail;
