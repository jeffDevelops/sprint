import styled from 'styled-components';

interface IFlexStartCol {
  readonly justifyContent: string
  readonly alignItems?: string
  readonly height?: string
  readonly width?: string
  readonly margin?: string
  readonly padding?: string
}

const FlexStartCol = styled.div<IFlexStartCol>`
  display: flex;
  flex-direction: column;
  justify-content: ${props => props.justifyContent};
  align-items: ${props => props.alignItems ? props.alignItems : 'center'};
  height: ${props => props.height ? props.height : 'auto'};
  width: ${props => props.width ? props.width : '100%'};
  margin: ${props => props.margin ? props.margin : '0 auto'};
  padding: ${props => props.padding ? props.padding : '0'};
`;

export default FlexStartCol;