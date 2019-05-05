import styled from 'styled-components';

interface IParagraph {
  readonly width?: string
  readonly textAlign?: string
}

const P = styled.p<IParagraph>`
  width: ${props => props.width ? props.width : '100%'};
  text-align: ${props => props.textAlign ? props.textAlign : 'left'};
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  font-weight: 600;
  font-size: .8em;
`;

export default P;