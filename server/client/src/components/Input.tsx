import React, { SetStateAction } from 'react';
import { Input as StyledInput, Label, InputContainer } from '../styled/Input';

interface IInputProps {
  name: string
  label: string
  type: string
  width: string
  value: string
  updateState: (value: string) => void
}

const Input = (props: IInputProps)  => {
  const { value, type, name, label, width, updateState } = props;
    return (
      <InputContainer width={ width }>
        <StyledInput
          onChange={ (e) => updateState(e.target.value) }
          value={ value }
          type={ type }
          id={ name }
          name={ name }
        />
        <Label htmlFor={ name }>{ label }</Label>
      </InputContainer>
  )
};

export default Input;