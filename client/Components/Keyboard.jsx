import React from 'react';
import { KeyboardContainer, Row, Spacebar, Key, } from './Styles/AppStyles.jsx';


const Keyboard = () => {
  return (
    <KeyboardContainer>
      <Row width={'65%'}>
        <Key>q</Key>
        <Key>w</Key>
        <Key>e</Key>
        <Key>r</Key>
        <Key>t</Key>
        <Key>y</Key>
        <Key>u</Key>
        <Key>i</Key>
        <Key>o</Key>
        <Key>p</Key>
        <Key>[</Key>
        <Key>]</Key>
      </Row>
      <Row width={'60%'}>
      <Key>a</Key>
        <Key>s</Key>
        <Key>d</Key>
        <Key>f</Key>
        <Key>g</Key>
        <Key>h</Key>
        <Key>j</Key>
        <Key>k</Key>
        <Key>l</Key>
        <Key>;</Key>
        <Key>'</Key>
      </Row>
      <Row width={'55%'}>
      <Key>z</Key>
        <Key>x</Key>
        <Key>c</Key>
        <Key>v</Key>
        <Key>b</Key>
        <Key>n</Key>
        <Key>m</Key>
        <Key>,</Key>
        <Key>.</Key>
        <Key>/</Key>
      </Row>
      <Row width={'30%'}>
        <Key width={'400px'}>⎵</Key>
      </Row>
    </KeyboardContainer>
  )
}

export default Keyboard;