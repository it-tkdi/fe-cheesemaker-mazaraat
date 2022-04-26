import styled from 'styled-components'

export const MakeCheeseContainer = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;
  /* max-height: 100%; */
`;

export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;
  max-height: 100%;
  overflow: hidden;
  /* background: #cacaca; */
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  /* background: #cacaca; */
`

export const FormContainer = styled.div`
  flex: 2;
  height: 100%;
  border: 1px solid #dbd5d0;
  margin-bottom: 30px;
  box-sizing: border-box;
  border-radius: 4px;
  padding: 30px;
  text-align: left;
`;

export const SummaryContainer = styled.div`
  flex: 1;
  text-align: left;
`;

export const Summary = styled.div`
  min-height: 170px;
  max-height: 100%;
  padding: 30px;
  border: 1px solid #dbd5d0;
  box-sizing: border-box;
  border-radius: 4px;
`;

export const TitleBox = styled.div`
  width: 100%;
  height: 80px;
  /* background: #cacaca; */
`

export const FieldGroup = styled.div`
  width: 300px;
  height: 80px;
  margin-right: 30px;
  /* display: flex; */
  /* background: #cacaca; */
`

export const Form = styled.form`
  width: 100%;
  max-height: 100%;
  display: flex;
  flex-wrap: wrap;
  /* align-items: flex-s  tart ; */
  /* background: #cacaca; */
`;