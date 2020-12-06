import styled from 'styled-components';

const KeyboardContainer = styled.div`
position: relative;
top: 40%;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
height: 325px;
`

const Row = styled.div`
width: ${({ width }) => width};
height: 25%;
display: flex;
flex-direction: row;
justify-content: space-evenly;
align-items: center;
`

const Key = styled.div`
width: ${({ width }) => width || '60px'};
height: 75%;
border: 1px solid white;
border-radius: 5px;
text-align: center;
color: white;
`

export {
  KeyboardContainer,
  Row,
  Key,
}