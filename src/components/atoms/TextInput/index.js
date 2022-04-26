import React from 'react'
import { TextInputComponent } from './TextInputElement'

const TextInput = ({placeholder, width='100%'}) => {
  return (
      <TextInputComponent placeholder={placeholder} width={width} />
  )
}

export default TextInput