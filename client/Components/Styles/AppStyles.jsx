import styled from 'styled-components';

const KeyboardContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
height: 300px;
`

const Row = styled.div`
width: ${({ width }) => width};
height: 25%;
background-color: red;
display: flex;
flex-direction: row;
justify-content: space-evenly;
align-items: center;
`

const Key = styled.div`
width: 7%;
height: 70%;
background-color: blue;
`

export {
  KeyboardContainer,
  Row,
  Key,
}