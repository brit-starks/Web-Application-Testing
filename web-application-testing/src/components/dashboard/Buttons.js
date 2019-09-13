import React from 'react';

const Buttons = (props) => {
  console.log(props);

  return(
    <div className='buttons'>
      <div className='strike'>
        <h3 className='strike-title'>Strike</h3>
        <button onClick={() => {props.setScore(props.score+ 2)}} className='home-strike-btn'>click</button>
      </div>

        <div></div>
    </div>
  )
}

export default Buttons;