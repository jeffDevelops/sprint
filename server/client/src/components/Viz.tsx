import React, { useContext } from 'react';
import styled from 'styled-components';

import { TaskContext, ITaskContext, ISubtask } from '../context/TaskContext';

import CompletionPieGraph from './CompletionPieGraph';

import Panel from '../styled/Panel';
import NoData from '../styled/NoData';
import Heading from '../styled/Heading';

const Viz: React.FC = () => {
  const taskContext: ITaskContext = useContext(TaskContext);
  const { loading, currentTask } = taskContext;

  if (!currentTask && loading) {
    return <Panel><NoData>Loading</NoData></Panel>
  } else if (!currentTask && !loading) {
    return <Panel><NoData>Select a task or create one to see completion status</NoData></Panel>
  } else {

    /* ------ Determine completion ------- */

    // Tally points for all subtasks
    const totalPoints: number = currentTask!.subtasks
      .reduce((acc: number, currentIndex: ISubtask): number => {
        acc += currentIndex.points;
        return acc;
      }, 0);

    // Tally completed subtasks' points
    const completedPoints: number = currentTask!.subtasks
      .reduce((acc: number, currentIndex: ISubtask): number => {
        if (currentIndex.complete) acc += currentIndex.points;
        return acc;
      }, 0);

    // Reformat tallies into a done / not-done ratio to pass to pie graph
    const completion: number = Math.floor((completedPoints / totalPoints) * 100);
    const incompletion: number = Math.floor(100 - completion);

    return (
      <Panel padding="15px">
        <Heading margin="0 0 15px 0">{ currentTask!.name }</Heading>

        <CompletionPieGraph
          completion={ completion }
          incompletion={ incompletion }
        />

      </Panel>
    )
  }
}

export default Viz;