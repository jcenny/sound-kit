import React, { useState, useEffect } from 'react';
import { sampleSounds } from '../sampleSounds.js';
import Keyboard from './Keyboard.jsx';
import { GlobalStyle } from './Styles/AppStyles.jsx';

const App = () => {
  const [firstRowKeys, setFirstRowKeys] = useState([]);
  const [secondRowKeys, setSecondRowKeys] = useState([]);
  const [thirdRowKeys, setThirdRowKeys] = useState([]);
  const [fourthRowKeys, setFourthRowKeys] = useState([]);
  
  const setRows = () => {
    let firstRow = [],
        secondRow = [],
        thirdRow = [],
        fourthRow = [];

    sampleSounds.forEach((sound, idx) => {
      if (idx <= 11) firstRow.push(sound);
      else if (idx <= 22) secondRow.push(sound);
      else if (idx <= 32) thirdRow.push(sound);
      else fourthRow.push(sound)
    })
  
    setFirstRowKeys(firstRow);
    setSecondRowKeys(secondRow);
    setThirdRowKeys(thirdRow);
    setFourthRowKeys(fourthRow);
  }

  useEffect(() => {
    setRows();
    const handleKeyPress = (e) => {
      let audio;
      if (e.keyCode !== 32) audio = document.querySelector(`audio[data-key="${e.key}"]`)
      else audio = document.querySelector(`audio[data-key="⎵"]`)
      if (!audio) return;
      audio.currentTime = 0;
      audio.play();
    }

    document.addEventListener('keydown', handleKeyPress)

    return function cleanUp () {
      document.removeEventListener('keydown', handleKeyPress)
    }
  }, [])

  return (
    <div style={{height: '650px'}}>
      <GlobalStyle/>
      <h1 style={{textAlign: 'center', color: 'white', letterSpacing: '5px', fontSize: '40px'}}>sound kit</h1>
      <Keyboard 
        firstRowKeys={firstRowKeys} 
        secondRowKeys={secondRowKeys} 
        thirdRowKeys={thirdRowKeys} 
        fourthRowKeys={fourthRowKeys}/>
    </div>
  )
}

export default App;