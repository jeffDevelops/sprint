import styled, { keyframes } from 'styled-components';

const transitionBackground = keyframes`
  0% { background-color: rgba(0, 0, 0, 0); }
  100% { background-color: rgba(0, 0, 0, .1); }
`;

const ModalUnderlay = styled.div`
  animation: ${transitionBackground} ${props => props.theme.transitions.in} linear forwards;
  height: 100vh;
  width: 100vw;
  z-index: 1;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
`;

export default ModalUnderlay;