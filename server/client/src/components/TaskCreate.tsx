import React, { Fragment, useState, useContext } from 'react';
import styled from 'styled-components';

import { TaskContext } from '../context/TaskContext';

import Heading from '../styled/Heading';
import Input from './Input';
import Button from '../styled/Button';
import FlexRow from '../styled/FormatHelpers/FlexRow';
import StickyHeader from '../styled/StickyHeader';

const TaskCreate: React.FC = () => {
  const [ taskName, updateTaskName ] = useState('');
  const { createTask } = useContext(TaskContext);

  return (
    <StickyHeader>
      <Heading>New Task</Heading>
      <form onSubmit={ e => {
        e.preventDefault();
        
        if (!taskName) return alert('Please enter a name for the task');

        createTask(taskName.trim())
          .then(() => updateTaskName(''))
          .catch(error => console.error(error));

      }}>
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
              type="submit"
              width="15%"
            >Add Task</Button>

        </FlexRow>
      </form>
    </StickyHeader>
  );
};

export default TaskCreate;