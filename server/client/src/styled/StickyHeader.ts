import styled from 'styled-components';

const StickyHeader = styled.div`
  width: 100%;
  padding: 15px;
  border-bottom: 1px solid ${props => props.theme.colors.lightGray};
  background-color: #fff;
  position: sticky;
  z-index: 1;
  top: 0;
  left: 15px;
  overflow: hidden;
  border-radius: 4px 4px 0 0;
`;

export default StickyHeader;