import React, { useContext } from 'react';
import styled from 'styled-components';

import Tasks from './Tasks';
import Subtasks from './Subtasks';
import SubtaskDetail from './SubtaskDetail';
import Viz from './Viz';

const GridContainer = styled.main`
  height: calc(100vh - 40px);
  max-width: calc(100vw - 40px);
  width: calc(100vw - 40px);
  margin: 20px auto 0 auto;
  display: grid;
  grid-gap: 20px;
  transition:
    grid-template-rows ${props => props.theme.transitions.in},
    grid-template-columns ${props => props.theme.transitions.in};

  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: minmax(300px, auto) minmax(0, 1fr) repeat(2, minmax(0, auto));
  grid-template-areas:
    'tasks tasks viz viz subtask_detail subtask_detail'
    'tasks tasks viz viz subtask_detail subtask_detail'
    'tasks tasks subtasks subtasks subtasks subtasks'
    'tasks tasks subtasks subtasks subtasks subtasks';

  ${props => props.theme.media.medium(`
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
    grid-template-rows: minmax(250px, 1fr) minmax(0, auto) repeat(2, minmax(0, auto)) ;
    grid-template-areas:
      'tasks viz'
      'tasks subtask_detail'
      'tasks subtasks'
      'tasks subtasks';
  `)}

  ${props => props.theme.media.small(`
    margin-bottom: 20px;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, 1fr);
    grid-template-areas:
      'viz'
      'tasks'
      'subtasks'
      'subtask_detail';
  `)}
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