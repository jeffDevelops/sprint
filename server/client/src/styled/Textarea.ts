import styled from 'styled-components';

import { Input, Label, InputContainer } from './Input';

export const Textarea = styled(Input).attrs({ as: 'textarea' })`
  min-height: 75px;
`;

// Avoid naming collisions
export const TextareaLabel = styled(Label)``;
export const TextareaContainer = styled(InputContainer)``;