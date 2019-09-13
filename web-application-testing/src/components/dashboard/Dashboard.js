import React, { useState } from 'react';

const Dashboard = () => {

  const [strike, setStrike] = useState(0);
  const [ball, setBall] = useState(0);  
  const [foul, setFoul] = useState(0);  
  const [hit, setHit] = useState(0);  

  return(
    <div className='dashboard-wrapper'>
      <div className='at-bat-display'>
      <div className='strike-wrapper'>
        <h3 className='strike-title'>Strike</h3>
        <div className='strike-score'>{strike}</div>
      </div>

      <div className='ball-wrapper'>
        <h3 className='ball-title'>Ball</h3>
        <div className='ball-score'>{ball}</div>
      </div>

      <div className='foul-wrapper'>
        <h3 className='foul-title'>Foul</h3>
        <div className='foul-score'>{foul}</div>
      </div>

      <div className='hit-wrapper'>
        <h3 className='hit-title'>Hit</h3>
        <div className='hit-score'>{hit}</div>
      </div>
      </div>

      <div className='buttons'>
        <button onClick={() => setStrike(strike+1)} className='strike'>Strike</button>
        <button onClick={() => setBall(ball+1)} className='ball'>Ball</button>
        <button onClick={() => setFoul(foul+1)} className='foul'>Foul</button>
        <button onClick={() => setHit(hit+1)} className='hit'>Hit</button>
      </div>
    </div>
  );
}

export default Dashboard;
