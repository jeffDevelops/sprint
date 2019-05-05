import styled from 'styled-components';

interface ISpaceBetweenRow {
  readonly height?: string
  readonly width?: string
  readonly margin?: string
  readonly padding?: string
  readonly alignItems?: string
}

const SpaceBetweenRow = styled.div<ISpaceBetweenRow>`
  display: flex;
  justify-content: space-between;
  align-items: ${props => props.alignItems ? props.alignItems : 'center'};
  height: ${props => props.height ? props.height : 'auto'};
  width: ${props => props.width ? props.width : '100%'};
  margin: ${props => props.margin ? props.margin : '0 auto'};
  padding: ${props => props.padding ? props.padding : '0'};
`;

export default SpaceBetweenRow;