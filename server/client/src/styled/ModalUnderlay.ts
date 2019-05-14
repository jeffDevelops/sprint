import styled, { keyframes } from 'styled-components';
import Panel from '../styled/Panel';

const transitionBackground = keyframes`
  0% { background-color: rgba(0, 0, 0, 0); }
  100% { background-color: rgba(0, 0, 0, .5); }
`;

// name duration timing-function delay iteration-count direction fill-mode play-state;

const ModalUnderlay = styled.div`
  animation: ${transitionBackground} ${props => props.theme.transitions.out} ease-out 0s forwards;
  height: 100vh;
  width: 100vw;
  z-index: 1;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  transform: translateZ(0);
  willchange: background-color;

  ${Panel} {
    box-shadow: none;
  }
`;

export default ModalUnderlay;