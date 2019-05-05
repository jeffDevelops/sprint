import React, { useContext } from 'react';
import styled from 'styled-components';

import { TaskContext, ITaskContext, ISubtask } from '../context/TaskContext';

import SpaceBetweenRow from '../styled/FormatHelpers/SpaceBetweenRow';
import FlexStartCol from '../styled/FormatHelpers/FlexStartCol';
import FlexStartRow from '../styled/FormatHelpers/FlexStartRow';
import Panel from '../styled/Panel';
import ScrollableContainer from '../styled/ScrollableContainer';
import NoSubtasks from '../styled/NoData';
import Subtask from '../styled/ListItem';
import P from '../styled/P';

const Subtasks: React.FC = () => {
  const taskContext: ITaskContext = useContext(TaskContext);
  const { loading, currentTask, selectSubtask, currentSubtask } = taskContext;

  let subtasks: ISubtask[] = [] as ISubtask[];
  if (currentTask) subtasks = currentTask.subtasks;

  return (
    <Panel>
      <ScrollableContainer>
        { subtasks.length === 0 && loading &&
          <NoSubtasks>Loading...</NoSubtasks>
        }

        { subtasks.length === 0 && !loading &&
          <NoSubtasks>No tasks to display</NoSubtasks>
        }

        { subtasks.length > 0 && subtasks.map(subtask => (
          <Subtask
            onClick={ () => selectSubtask(subtask._id) }
            key={ subtask._id }
            active={ currentSubtask ? subtask._id === currentSubtask._id : false }
          >

            <SpaceBetweenRow>

              <P>{ subtask.name }</P>

            </SpaceBetweenRow>

          </Subtask>
        ))}
      </ScrollableContainer>
    </Panel>
  )
}

export default Subtasks;