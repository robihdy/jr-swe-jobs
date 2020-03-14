import React from 'react';
import { Typography } from 'antd';
import JobItem from './JobItem';
import JobDetail from './JobDetail';

const { Title } = Typography;

class Jobs extends React.Component {
  state = {
    showModal: false,
    clickedIdx: 0
  };

  handleClick = idx => {
    this.setState({
      showModal: !this.state.showModal,
      clickedIdx: idx
    });
  };

  handleCancel = () => {
    this.setState({
      showModal: !this.state.showModal
    });
  };

  render() {
    const { jobs } = this.props;
    return (
      <div>
        <Title level={4} style={{ textAlign: 'center' }}>
          Found {jobs.length} jobs
        </Title>
        {jobs.map((job, idx) => (
          <JobItem
            key={idx}
            idx={idx}
            job={job}
            handleClick={this.handleClick}
          />
        ))}
        {this.state.showModal ? (
          <JobDetail
            job={jobs[this.state.clickedIdx]}
            handleCancel={this.handleCancel}
          />
        ) : null}
      </div>
    );
  }
}

export default Jobs;
