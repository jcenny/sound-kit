import React from 'react';
import { KeyContainer } from './Styles/AppStyles.jsx';

const Key = ({ set, width, keyCode }) => {
  const { key, sound } = set;
  console.log(keyCode, 'keyCode')
  return (
    <KeyContainer width={width || '60px'} data-key={keyCode || key}>
      <kbd style={{fontSize: '16px'}}>{key}</kbd>
      <div> {sound.substring(0, sound.length - 4)}</div>
      <audio data-key={keyCode || key} src={`./sounds/${sound}`}></audio>
    </KeyContainer>
  )
}

export default Key;