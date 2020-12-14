import React from 'react';
import { KeyContainer } from './Styles/AppStyles.jsx';

const Key = ({ set, width }) => {
  const { key, sound } = set;
  return (
    <KeyContainer width={width || '60px'} data-key={key}>
      <kbd>{key}</kbd>
      <div> {sound.substring(0, sound.length - 4)}</div>
      <audio data-key={key} src={`./sounds/${sound}`}></audio>
    </KeyContainer>
  )
}

export default Key;