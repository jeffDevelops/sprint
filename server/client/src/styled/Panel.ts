import styled from 'styled-components';

interface IPanel {
  readonly padding?: string
}

const Panel = styled.div<IPanel>`
  height: 100%;
  width: 100%;
  background-color: #fff;
  border-radius: ${props => props.theme.borderRadius};
  box-shadow: ${props => props.theme.boxShadow};
  overflow: auto;
  padding: ${props => props.padding ? props.padding : '0'};
  transform: translateZ(0);
  transition: height ${props => props.theme.transitions.in};
`;

export default Panel;
