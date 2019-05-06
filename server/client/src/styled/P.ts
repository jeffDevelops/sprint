import styled from 'styled-components';

interface IParagraph {
  readonly width?: string
  readonly textAlign?: string
  readonly fontWeight?: string
}

const P = styled.p<IParagraph>`
  width: ${props => props.width ? props.width : '100%'};
  text-align: ${props => props.textAlign ? props.textAlign : 'left'};
  font-weight: ${props => props.fontWeight ? props.fontWeight : '400'};
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  font-size: .8em;
`;

export default P;