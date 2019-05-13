import React, { useContext } from 'react';
import styled from 'styled-components';

import { TaskContext, ITaskContext, IDbSubtask } from '../context/TaskContext';

import CompletionPieGraph from './CompletionPieGraph';

import Panel from '../styled/Panel';
import NoData from '../styled/NoData';
import Heading from '../styled/Heading';
import LinkStyleButton from '../styled/LinkStyleButton';

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
      .reduce((acc: number, currentIndex: IDbSubtask): number => {
        acc += currentIndex.points;
        return acc;
      }, 0);

    // Tally completed subtasks' points
    const completedPoints: number = currentTask!.subtasks
      .reduce((acc: number, currentIndex: IDbSubtask): number => {
        if (currentIndex.complete) acc += currentIndex.points;
        return acc;
      }, 0);

    // Reformat tallies into a done / not-done ratio to pass to pie graph
    const completion: number = Math.floor((completedPoints / totalPoints) * 100);
    const incompletion: number = Math.floor(100 - completion);

    return (
      <Panel>
        <Heading margin="15px 15px 0 15px">{ currentTask!.name }</Heading>

        { currentTask!.subtasks.length > 0
          ? <CompletionPieGraph
              completion={ completion }
              incompletion={ incompletion }
            />
          : <NoData>
              This task doesn't have any subtasks yet. &nbsp;
              <LinkStyleButton>Create one</LinkStyleButton>
            </NoData>
        }

      </Panel>
    )
  }
}

export default Viz;