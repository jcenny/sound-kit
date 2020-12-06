import React, { useState, useEffect } from 'react';
import { sampleSounds } from '../sampleSounds.js';
import Keyboard from './Keyboard.jsx';

const App = () => {
  const [keys, setKeys] = useState([]);
  
  // useEffect(() => {
  //   // setKeys(sampleSounds);

  //   // const handleKeyPress = (e) => {
  //   //   const audio = document.querySelector(`audio[data-key="${e.key}"]`);
  //   //   if (!audio) return;
  //   //   audio.currentTime = 0;
  //   //   audio.play();
  //   // }

  //   // document.addEventListener('keydown', handleKeyPress)

  //   // return function cleanUp () {
  //   //   document.removeEventListener('keydown', handleKeyPress)
  //   // }
  // })

  return (
    <div>
      {keys.map((set) => {
        let { key, sound } = set;
        return (
          <div>
            {/* <div data-key={key}>
              <kbd>{key.toUpperCase()}</kbd>
              <span> {sound.substring(0, sound.length - 4)}</span>
            </div>
            <audio data-key={key} src={`./sounds/${sound}`}></audio> */}
          </div>
        )
      })}
      <Keyboard/>
    </div>
  )
}

export default App;