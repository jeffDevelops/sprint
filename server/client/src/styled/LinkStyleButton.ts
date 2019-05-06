import styled from 'styled-components';

const LinkStyleButton = styled.button`
  color: ${props => props.theme.colors.main};
  font-weight: 600;
  font-size: .9em;
  border: 0;
  cursor: pointer;
  outline: none;

  &:hover {
    text-decoration: underline;
  }
`;

export default LinkStyleButton;