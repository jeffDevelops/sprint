import styled from 'styled-components';

interface IHeading {
  readonly margin?: string
}

const Heading = styled.h1<IHeading>`
  font-weight: ${props => props.theme.font.boldWeight};
  font-size: .9em;
  margin: ${props => props.margin ? props.margin : '0'};
`;

export default Heading;