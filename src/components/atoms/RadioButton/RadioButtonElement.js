import styled from 'styled-components'

export const Item = styled.div`
  display: flex;
  align-items: center;
  height: 48px;
  position: relative;
  box-sizing: border-box;
  margin-bottom: 10px;
`;

export const RadioBtnLabel = styled.label`
  position: absolute;
  top: 25%;
  left: 4px;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: white;
  border: 2px solid #dbd5d0; 
  padding: 2px;
`;

export const RadioBtn = styled.input`
  opacity: 0;
  z-index: 1;
  cursor: pointer;
  width: 25px;
  height: 25px;
  margin-right: 10px;
  /* &:hover ~ ${RadioBtnLabel} {
    background: #ccc;
  } */
  &:checked + ${Item} {
    background: #f08618;
    border: 2px solid #f08618;
  }
  &:checked + ${RadioBtnLabel} {
    background: #f08618;
    border: 2px solid #f08618;
  }
`;

