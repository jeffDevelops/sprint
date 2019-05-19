import React, { useContext } from 'react';
import styled from 'styled-components';

import { TaskContext } from '../context/TaskContext';

import EditPoints from './EditPoints';

import FlexRow from '../styled/FormatHelpers/FlexRow';
import Heading from '../styled/Heading';
import Panel from '../styled/Panel';
import NoData from '../styled/NoData';
import LinkStyleButton from '../styled/LinkStyleButton';
import Description from '../styled/Description';

const SubtaskDetail: React.FC = () => {
  const { toggleSubtaskModal, loading, currentSubtask, updateSubtask } = useContext(TaskContext);

  if (!currentSubtask && loading) {
    return <Panel><NoData>Loading</NoData></Panel>
  } else if (!currentSubtask && !loading) {
    return (
      <Panel>
        <NoData>Select a subtask or &nbsp;
          <LinkStyleButton onClick={ toggleSubtaskModal }>create one</LinkStyleButton>
        </NoData>
      </Panel>
    )
  } else {
    return (
      <Panel padding="15px">
        
        <FlexRow
          justifyContent="space-between"
          alignItems="flex-start"
        >
          <Heading>{ currentSubtask!.name }</Heading>
          <LinkStyleButton onClick={ toggleSubtaskModal }>Edit Subtask</LinkStyleButton>
        </FlexRow>

        <Heading margin="15px 0 5px 0">Description</Heading>
        <Description>{ currentSubtask!.description ? currentSubtask!.description : '' }</Description>

        <EditPoints
          updateParent={ points => updateSubtask({ ...currentSubtask!, points }) }
          points={ currentSubtask!.points }
        />
      </Panel>
    )
  }
}

export default SubtaskDetail;