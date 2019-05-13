import styled from 'styled-components';

interface IParagraph {
  readonly flexBasis?: string
  readonly width?: string
  readonly textAlign?: string
  readonly fontWeight?: string
}

const P = styled.p<IParagraph>`
  flex-basis: ${props => props.flexBasis ? props.flexBasis : '100%'};
  max-width: ${props => props.width ? props.width : '100%'};
  width: ${props => props.width ? props.width : '100%'};
  text-align: ${props => props.textAlign ? props.textAlign : 'left'};
  font-weight: ${props => props.fontWeight ? props.fontWeight : '400'};
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  font-size: .8em;
  min-width: 0;
`;

export default P;