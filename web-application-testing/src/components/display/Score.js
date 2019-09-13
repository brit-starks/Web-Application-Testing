import React, { useState } from 'react';

import Buttons from '../dashboard/Buttons';

const Score = () => {
  
  return(
    <div className='scoreboard'> 
      <div className='guest'>
        <h3 className='guest-title'>Guest</h3>
        <div className='guest-score'>23</div>
      </div>

      <div className='home'>
        <h3 className='home-title'>Home</h3>
        <div className='home-score'>34</div>
      </div>
    </div>
  )
}

export default Score;