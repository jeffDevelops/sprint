import styled from 'styled-components';

const LinkStyleButton = styled.button`
  color: ${props => props.theme.colors.main};
  font-weight: inherit;
  font-size: .9em;
  font-style: inherit;
  border: 0;
  cursor: pointer;
  outline: none;
  background-color: transparent;

  &:hover {
    text-decoration: underline;
  }
`;

export default LinkStyleButton;