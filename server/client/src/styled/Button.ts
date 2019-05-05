import styled from 'styled-components';

interface IButton {
  disabled?: boolean
  width?: string
}

const Button = styled.button<IButton>`
  background-color: ${props => {
    if (props.disabled) return props.theme.colors.gray;
    return props.theme.colors.main;
  }};
  min-width: 115px;
  width: ${props => props.width ? props.width : 'auto'};
  color: #fff;
  border: 0;
  border-radius: ${props => props.theme.borderRadius};
  height: 30px;
  text-transform: uppercase;
  font-size: .9em;
  font-weight: 600;
  padding: 0 15px;
`;

export default Button;