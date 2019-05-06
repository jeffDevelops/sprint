import React from 'react';
import styled from 'styled-components';

import FlexCol from '../styled/FormatHelpers/FlexCol';
import FlexRow from '../styled/FormatHelpers/FlexRow';
import StickyHeader from '../styled/StickyHeader';
import Heading from '../styled/Heading';
import P from '../styled/P';
import LinkStyleButton from '../styled/LinkStyleButton';
import Description from '../styled/Description';

import { AddCircleOutline } from 'styled-icons/material/AddCircleOutline';

interface ITaskTitleBarProps {
  readonly name: string
  readonly description: string
}

const PlusIcon = styled(AddCircleOutline)`
  width: 18px;
  color: ${props => props.theme.colors.main};
  margin-top: -1px;
  margin-right: 5px;
`;

const TaskTitleBar: React.FC<ITaskTitleBarProps> = (props: ITaskTitleBarProps) => (
  <StickyHeader>

    <FlexRow
      justifyContent="space-between"
      alignItems="flex-start"
    >
      <FlexCol
        justifyContent="flex-start"
        alignItems="flex-start"
        width="70%">
        <Heading>{ props.name }</Heading>
        <Description>{ props.description }</Description>
      </FlexCol>

      <FlexRow
        justifyContent="flex-end"
        alignItems="flex-start"
        width="30%"
      >
        <PlusIcon />
        <LinkStyleButton>New Subtask</LinkStyleButton>
      </FlexRow>
    </FlexRow>

  </StickyHeader>
    
);

export default TaskTitleBar;