import styled from 'styled-components';

interface ICompletionIndicator {
  readonly width?: string
}

const CompletionIndicator = styled.span<ICompletionIndicator>`
  padding: 0 10px;
  background-color: ${props => props.theme.colors.gray};
  color: #fff;
  border-radius: ${props => props.theme.borderRadius};
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 3px 0;
  font-size: .7em;
  width: ${props => props.width ? props.width : 'none'};
`;

export default CompletionIndicator;