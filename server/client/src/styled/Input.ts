import styled from 'styled-components';

interface IInputContainer {
  readonly width?: string
  readonly margin?: string
  readonly padding?: string
}

export const Label = styled.label`
  color: ${props => props.theme.colors.gray};
  transition: color ${props => props.theme.transitions.out};
  font-size: .8em;
`;

export const Input = styled.input`
  border: 0;
  border-bottom: 1px solid ${props => props.theme.colors.gray};
  padding: 4px 0;
  outline: none;
  transition: all ${props => props.theme.transitions.out};
  width: ${props => props.width ? props.width : '100%'};
  font-size: 1em;
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

