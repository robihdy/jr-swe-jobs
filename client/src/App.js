import React from 'react';
import Jobs from './components/Jobs';

import './App.css';

const mockJobs = [
  { title: 'SWE1', company: 'Facebook' },
  { title: 'SWE2', company: 'Amazon' },
  { title: 'SWE3', company: 'Netflix' },
  { title: 'SWE4', company: 'Google' }
];

function App() {
  return (
    <div className="App">
      <Jobs jobs={mockJobs} />
    </div>
  );
}

export default App;
