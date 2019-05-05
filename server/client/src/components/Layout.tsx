import React, { useContext } from 'react';
import styled from 'styled-components';

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

  @media(max-width: 500px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, 1fr);
    grid-template-areas:
      'viz'
      'tasks'
      'subtasks'
      'subtask_detail';
  }
`;

interface IGridItem {
  gridArea: string
}

const GridItem = styled.section<IGridItem>`
  grid-area: ${props => props.gridArea};
`;

const Layout: React.FC = () => (
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


export default Layout;