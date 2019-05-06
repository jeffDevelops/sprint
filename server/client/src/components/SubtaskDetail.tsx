import React, { useContext } from 'react';
import styled from 'styled-components';

import { TaskContext, ITaskContext } from '../context/TaskContext';

import FlexRow from '../styled/FormatHelpers/FlexRow';
import Heading from '../styled/Heading';
import Panel from '../styled/Panel';
import NoData from '../styled/NoData';
import LinkStyleButton from '../styled/LinkStyleButton';
import Description from '../styled/Description';

const SubtaskDetail: React.FC = () => {
  const taskContext: ITaskContext = useContext(TaskContext);
  const { loading, currentSubtask } = taskContext;

  if (!currentSubtask && loading) {
    return <Panel><NoData>Loading</NoData></Panel>
  } else if (!currentSubtask && !loading) {
    return <Panel><NoData>Select a subtask or create one below</NoData></Panel>
  } else {
    return (
      <Panel padding="15px">
        
        <FlexRow
          justifyContent="space-between"
          alignItems="flex-start"
        >
          <Heading>{ currentSubtask!.name }</Heading>
          <LinkStyleButton>Edit Subtask</LinkStyleButton>
        </FlexRow>

        <Heading margin="15px 0 5px 0">Description</Heading>
        <Description>{ currentSubtask!.description ? currentSubtask!.description : '' }</Description>
      </Panel>
    )
  }
}

export default SubtaskDetail;