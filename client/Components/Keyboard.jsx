import React from 'react';
import { KeyboardContainer, Row, Spacebar, Key, } from './Styles/AppStyles.jsx';


const Keyboard = () => {
  return (
    <KeyboardContainer>
      <Row width={'85%'}>
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
      <Row width={'72%'}>
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
      <Row width={'71%'}>
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
      <Row width={'50%'}>
        <Key></Key>
      </Row>
    </KeyboardContainer>
  )
}

export default Keyboard;