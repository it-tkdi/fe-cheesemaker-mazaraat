import React from 'react'
import { Item, RadioBtn, RadioBtnLabel } from './RadioButtonElement'

const RadioButton = () => {
  return (
    <Item>
      <RadioBtn type="radio" name="radio" value="optionA" />
      <RadioBtnLabel />
      <div>Option 1</div>
    </Item>
  );
}

export default RadioButton