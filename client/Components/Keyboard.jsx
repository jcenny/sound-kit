import React from 'react';
import { KeyboardContainer, RowContainer } from './Styles/KeyboardStyles.jsx';
import Key from './Key.jsx';

const Keyboard = ({ firstRowKeys, secondRowKeys, thirdRowKeys, fourthRowKeys }) => {
  return (
    <KeyboardContainer>
      <RowContainer width='60%'>
        {firstRowKeys.map((set) => <Key set={set} />)}
      </RowContainer>
      <RowContainer width='55%'>
        {secondRowKeys.map((set) => <Key set={set} />)}
      </RowContainer>
      <RowContainer width='50%'>
        {thirdRowKeys.map((set) => <Key set={set} />)}
      </RowContainer>
      <RowContainer width='35%'>
        {fourthRowKeys.map((set) => <Key width={'400px'} set={set} />)}
      </RowContainer>
    </KeyboardContainer>
  )
}

export default Keyboard;