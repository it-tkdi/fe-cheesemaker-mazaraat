import React from 'react'
import { Title } from '../../components'
import { BottomContent, DashboardContainer, DashboardContent, Revenue, RevenueText, RevenueTime, RevenueValue, TopContent } from './DashboardElement'

const DashboardPage = () => {
  return (
    <DashboardContainer>
      <Title title="Dashboard" size="30px" weight={500} />
      <div style={{ marginBottom: 16 }}></div>
      <DashboardContent>
        <Revenue>
          <TopContent>
            <RevenueTime>
              <RevenueText>Bulan ini</RevenueText>
            </RevenueTime>
          </TopContent>
          <BottomContent>
            <RevenueValue>
              <h1>Cheese Created</h1>
              <h1 style={{ fontSize: 46 }}>735</h1>
            </RevenueValue>
            <RevenueValue>
              <h1>Cheese Cancelled</h1>
              <h1 style={{ fontSize: 46 }}>12</h1>
            </RevenueValue>
          </BottomContent>
        </Revenue>
      </DashboardContent>
    </DashboardContainer>
  );
}

export default DashboardPage