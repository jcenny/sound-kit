import React from 'react';
import { KeyboardContainer, Row, Spacebar, Key, } from './Styles/AppStyles.jsx';


const Keyboard = () => {
  return (
    <KeyboardContainer>
      <Row width={'65%'}>
        <Key></Key>
        <Key></Key>
        <Key></Key>
        <Key></Key>
        <Key></Key>
        <Key></Key>
        <Key></Key>
        <Key></Key>
        <Key></Key>
        <Key></Key>
        <Key></Key>
        <Key></Key>
      </Row>
      <Row width={'60%'}>
      <Key></Key>
        <Key></Key>
        <Key></Key>
        <Key></Key>
        <Key></Key>
        <Key></Key>
        <Key></Key>
        <Key></Key>
        <Key></Key>
        <Key></Key>
        <Key></Key>
      </Row>
      <Row width={'55%'}>
      <Key></Key>
        <Key></Key>
        <Key></Key>
        <Key></Key>
        <Key></Key>
        <Key></Key>
        <Key></Key>
        <Key></Key>
        <Key></Key>
        <Key></Key>
      </Row>
      <Row width={'30%'}>
        <Key></Key>
      </Row>
    </KeyboardContainer>
  )
}

export default Keyboard;