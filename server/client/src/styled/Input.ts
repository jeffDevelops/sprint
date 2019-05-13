import styled from 'styled-components';

interface IInputContainer {
  readonly width?: string
  readonly margin?: string
  readonly padding?: string
}

interface IInput {
  readonly fontSize?: string
  readonly fontWeight?: string
}

export const Label = styled.label`
  color: ${props => props.theme.colors.gray};
  transition: color ${props => props.theme.transitions.out};
  font-size: .8em;
`;

export const Input = styled.input<IInput>`
  border: 0;
  border-bottom: 1px solid ${props => props.theme.colors.gray};
  padding: 4px 0;
  outline: none;
  transition: all ${props => props.theme.transitions.out};
  width: ${props => props.width ? props.width : '100%'};
  font-size: ${props => props.fontSize ? props.fontSize : '1em'};
  font-weight: ${props => props.fontWeight ? props.fontWeight : '400'};
  margin-bottom: 5px;

  &:focus {
    border-bottom: 2px solid ${props => props.theme.colors.main};
    margin-bottom: 4px;
    transition: all ${props => props.theme.transitions.in};

    & + ${Label} {
      color: ${props => props.theme.colors.main};
      transition: color ${props => props.theme.transitions.in};
    }
  }
`;

export const InputContainer = styled.div<IInputContainer>`
  width: ${props => props.width ? props.width : '100%'};
  margin: ${props => props.margin ? props.margin : '0'};
  padding: ${props => props.padding ? props.padding : '0 auto'};
`;

