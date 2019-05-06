import React, { Fragment, useState } from 'react';
import styled from 'styled-components';

import Heading from '../styled/Heading';
import Input from './Input';
import Button from '../styled/Button';
import FlexRow from '../styled/FormatHelpers/FlexRow';
import StickyHeader from '../styled/StickyHeader';

const TaskCreate: React.FC = () => {
  const [ taskName, updateTaskName ] = useState('');

  return (
    <StickyHeader>
      <Heading>New Task</Heading>
      <FlexRow
        justifyContent="space-between"
        alignItems="flex-start"
        margin="15px 0 0 0"
        height="60px"
      >

        <Input
          updateState={ updateTaskName }
          value={ taskName }
          name="taskName"
          type="text"
          label="Task Name"
          width="calc(100% - 130px)"
        />

        <Button
          width="15%"
        >Add Task</Button>

      </FlexRow>
    </StickyHeader>
  );
};

export default TaskCreate;