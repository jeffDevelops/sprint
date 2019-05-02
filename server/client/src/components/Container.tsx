import React, { useContext } from 'react';
import styled from 'styled-components';

import { TaskContext, ITaskContext } from '../context/TaskContext';

import Tasks from './Tasks';
import Subtasks from './Subtasks';
import SubtaskDetail from './SubtaskDetail';
import Viz from './Viz';

const GridContainer = styled.main`
  height: calc(100vh - 40px);
  width: calc(100% - 40px);
  margin: 20px auto 0 auto;
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-template-areas:
    'tasks tasks subtask_detail subtask_detail viz'
    'tasks tasks subtasks subtasks subtasks'
    'tasks tasks subtasks subtasks subtasks';
`;

interface IGridItem {
  gridArea: string
}

const GridItem = styled.section<IGridItem>`
  grid-area: ${props => props.gridArea};
`;

const Container: React.FC = () => {
  const taskContext: ITaskContext = useContext(TaskContext);
  console.log({taskContext})

  return (
    <GridContainer>
      <GridItem gridArea="tasks">
        <Tasks />
      </GridItem>
      <GridItem gridArea="subtask_detail">
        <SubtaskDetail />
      </GridItem>
      <GridItem gridArea="viz">
        <Viz />
      </GridItem>
      <GridItem gridArea="subtasks">
        <Subtasks />
      </GridItem>
    </GridContainer>
  )
}

export default Container;