import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Card, Title } from '../../components';
import { Content, MakeCheeseContainer } from './MakeCheeseElement';

const CardCheese = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("multi-step");
  };
  return (
    <MakeCheeseContainer>
      <Title title="Pilih Keju" size="30px" weight={500} />
      <div style={{ marginBottom: 30 }}></div>
      <Content>
        <Card onClick={handleClick} valTitle="Cheddar - Moon River" />
        <Card valTitle="Halloumi" />
        <Card valTitle="Athan" />
        <Card valTitle="Appenzeller" />
        <Card valTitle="Tomme de Merapi" />
        <Card valTitle="Cheddar - Moon River" />
      </Content>
    </MakeCheeseContainer>
  );
}

export default CardCheese;