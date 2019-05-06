import styled from 'styled-components';

const CompletionIndicator = styled.span`
  display: inline;
  padding: 0 10px;
  background-color: ${props => props.theme.colors.gray};
  color: #fff;
  border-radius: ${props => props.theme.borderRadius};
  height: 30px;
  display: flex;
  align-items: center;
  margin: 3px 0;
  font-size: .8em;
`;

export default CompletionIndicator;