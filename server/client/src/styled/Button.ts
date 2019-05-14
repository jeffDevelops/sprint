import styled from 'styled-components';

interface IButton {
  disabled?: boolean
  width?: string
  minWidth?: string
}

const Button = styled.button<IButton>`
  background-color: ${props => {
    if (props.disabled) return props.theme.colors.lightGray;
    return props.theme.colors.main;
  }};
  min-width: ${props => props.minWidth ? props.minWidth : '115px'};
  width: ${props => props.width ? props.width : 'auto'};
  color: #fff;
  border: 0;
  border-radius: ${props => props.theme.borderRadius};
  height: 30px;
  text-transform: uppercase;
  font-size: .8em;
  font-weight: 600;
  padding: 0 15px;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  outline: none;

  &:hover {
    box-shadow: ${props => !props.disabled && props.theme.boxShadow};
    opacity: ${props => !props.disabled && '.9'};
  }

  &:active {
    box-shadow: 0;
    opacity: 1;
  }
`;

export default Button;