import styled from 'styled-components';

import P from '../styled/P';

// TODO: the truncated P styled-component should really be an extension of this styled-component

const Description = styled(P)`
  white-space: normal;
  text-overflow: clip;
  overflow: auto;
`;

export default Description;