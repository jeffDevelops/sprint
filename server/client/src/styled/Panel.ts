import styled from 'styled-components';

const Panel = styled.div`
  height: 100%;
  width: 100%;
  background-color: #fff;
  border-radius: ${props => props.theme.borderRadius};
  box-shadow: ${props => props.theme.boxShadow};
`;

export default Panel;
