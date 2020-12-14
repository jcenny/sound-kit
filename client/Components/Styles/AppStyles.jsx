import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *:focus {
    outline: none;
  }

  body {
    background-color: #ff9020;
    font-family: 'Work Sans', sans-serif;
  }
`;

export {
  GlobalStyle
}