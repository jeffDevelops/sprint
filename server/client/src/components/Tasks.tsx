import React, { Fragment } from 'react';
import styled from 'styled-components';

import { ITask } from '../context/TaskContext';

import TaskCreate from './TaskCreate';
import TaskList from './TaskList';

import Panel from '../styled/Panel';
import Heading from '../styled/Heading';

interface ITaskProps {
  tasks: ITask[]
}

const Tasks: React.FC = () => (
  <Panel>
    <TaskCreate />

    <TaskList />
  </Panel>
)

export default Tasks;