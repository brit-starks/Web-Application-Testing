import React, { useState } from 'react';
import './App.css';

import Score from './components/display/Score';
import Dashboard from './components/dashboard/Dashboard';

function App() {

  return (
    <div className="App">
      <div className='title'>
      <h1 style={{'fontSize':'3rem', 'textDecoration':'underline' }}>Scoreboard</h1>
      </div>

      <Score />
      <Dashboard />
    </div>
  );
}

export default App;
