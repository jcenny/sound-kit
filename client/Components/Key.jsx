import React from 'react';
import { KeyContainer, SoundDesc, KeyText } from './Styles/KeyboardStyles.jsx';

const Key = ({ set, width }) => {
  const { key, sound } = set;
  return (
    <KeyContainer width={width || '60px'} data-key={key}>
      <KeyText>{key}</KeyText>
      <SoundDesc> {sound.substring(0, sound.length - 4)}</SoundDesc>
      <audio data-key={key} src={`./sounds/${sound}`}></audio>
    </KeyContainer>
  )
}

export default Key;