import React from 'react'
import { Route, Routes } from 'react-router-dom';
import { Title } from '../../components';
import { Content, MakeCheeseContainer } from './MakeCheeseElement'
import CardCheese from './CardCheese';
import MultiStepForm from './MultiStepForm';

const MakeCheese = () => {
  return (
    <MakeCheeseContainer>
      <Content>
        <Routes>
          <Route path="/" element={<CardCheese />} />
          <Route path="/multi-step" element={<MultiStepForm />} />
        </Routes>
      </Content>
    </MakeCheeseContainer>
  );
}

export default MakeCheese;