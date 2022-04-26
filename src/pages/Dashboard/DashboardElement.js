import styled from 'styled-components'

export const DashboardContainer = styled.div`
    width: 100%;
    height: 100%;
    max-height: 100%;
    background: #fff;
    text-align: center;
    `;

export const DashboardContent = styled.div`
  /* position: relative; */
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;
  max-height: 100%;
  background: #fff;
`;

export const Revenue = styled.div`
  width: 100%;
  height: 250px;
  box-shadow: 0px 0px 2px 1px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  `;

export const TopContent = styled.div`
  padding-left: 5px;
  padding-right: 5px;
  width: 100%;
  height: 54px;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background: #cacaca; */
  border-bottom: 1px solid #dbd5d0;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;

export const BottomContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  height: 70%;
`

export const RevenueTime = styled.div`
  background: #20C997;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  width: 110px;
  height: 30px;
`;

export const RevenueText = styled.span`
  color: #ffffff;
  font-weight: bold;
`

export const RevenueValue = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 100%;
  /* background: red; */
`