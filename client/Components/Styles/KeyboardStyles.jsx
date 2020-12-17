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
const KeyContainer = styled.div`
  width: ${({ width }) => width};
  height: 75%;
  border: 1px solid white;
  border-radius: 5px;
  text-align: center;
  color: white;
`
const RowContainer = styled.div`
  width: ${({ width }) => width};
  height: 25%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`
const SoundDesc = styled.div`
  font-size: 14px;
  position: relative;
  top: 10px;
`

const KeyText = styled.kbd`
  font-weight: 800;
  font-size: 16px;
  position: relative;
  top: 5px;
`

export {
  KeyboardContainer,
  RowContainer,
  KeyContainer,
  KeyText,
  SoundDesc,
}