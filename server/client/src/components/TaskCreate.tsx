import React, { Fragment, useState } from 'react';
import styled from 'styled-components';

import Heading from '../styled/Heading';
import Input from './Input';
import Button from '../styled/Button';
import SpaceBetweenRow from '../styled/FormatHelpers/SpaceBetweenRow';

const Container = styled.div`
  width: 100%;
  padding: 15px;
  border-bottom: 1px solid ${props => props.theme.colors.lightGray};
  background-color: #fff;
  position: sticky;
  z-index: 1;
  top: 0;
  left: 15px;
  overflow: hidden;
  border-radius: 4px 4px 0 0;
`;

const TaskCreate: React.FC = () => {
  const [ taskName, updateTaskName ] = useState('');

  return (
    <Container>
      <Heading>New Task</Heading>
      <SpaceBetweenRow
        margin="15px 0 0 0"
        height="60px"
        alignItems="flex-start">

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

      </SpaceBetweenRow>
    </Container>
  );
};

export default TaskCreate;