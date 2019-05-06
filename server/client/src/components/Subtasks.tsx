import React, { useContext } from 'react';
import styled from 'styled-components';

import { TaskContext, ITaskContext, ISubtask } from '../context/TaskContext';

import TaskTitleBar from './TaskTitleBar';

import FlexRow from '../styled/FormatHelpers/FlexRow';
import FlexStartCol from '../styled/FormatHelpers/FlexCol';
import FlexStartRow from '../styled/FormatHelpers/FlexRow';
import Panel from '../styled/Panel';
import ScrollableContainer from '../styled/ScrollableContainer';
import NoSubtasks from '../styled/NoData';
import ListItem from '../styled/ListItem';
import P from '../styled/P';
import CompletionIndicator from '../styled/CompletionIndicator';

import { RadioButtonUnchecked } from 'styled-icons/material/RadioButtonUnchecked';
import { CheckCircle } from 'styled-icons/boxicons-regular/CheckCircle';

const checkboxStyles: string = `
  width: 30px;
  margin-right: 15px;
  cursor: pointer;
`;
  
const Unchecked = styled(RadioButtonUnchecked)`
  ${checkboxStyles}
  color: ${props => props.theme.colors.main};
`;
  
const Checked = styled(CheckCircle)`
  ${checkboxStyles}
  color: ${props => props.theme.colors.main};
`;

const Subtask = styled(ListItem)`
  ${Checked}, ${Unchecked} {
    color: ${props => {
      if (props.active) return '#fff';
      return props.theme.colors.main;
    }};
  }
`;

const Subtasks: React.FC = () => {
  const taskContext: ITaskContext = useContext(TaskContext);
  const { loading, currentTask, selectSubtask, currentSubtask } = taskContext;

  let subtasks: ISubtask[] = [] as ISubtask[];
  if (currentTask) {
    subtasks = currentTask.subtasks;
  } else {
    return null;
  }

  return (
    <Panel>
      <TaskTitleBar
        name={ currentTask.name }
        description={ currentTask.description ? currentTask.description : '' }
      />

      <ScrollableContainer>
        { subtasks.length === 0 && loading &&
          <NoSubtasks>Loading...</NoSubtasks>
        }

        { subtasks.length === 0 && !loading &&
          <NoSubtasks>No subtasks to display</NoSubtasks>
        }

        { subtasks.length > 0 && subtasks.map(subtask => (
          <Subtask
            onClick={ () => selectSubtask(subtask._id) }
            key={ subtask._id }
            active={ currentSubtask ? subtask._id === currentSubtask._id : false }
          >
          
            <FlexRow justifyContent="space-between">

              { subtask.complete ? <Checked /> : <Unchecked /> }

              <CompletionIndicator>
                { 
                  subtask.points === 1
                    ? `${subtask.points} pt`
                    : `${subtask.points} pts`
                }
              </CompletionIndicator>
              <P width="20%" fontWeight="600">{ subtask.name }</P>
              <P width="50%">{ subtask.description }</P>

            </FlexRow>

          </Subtask>
        ))}
      </ScrollableContainer>
    </Panel>
  )
}

export default Subtasks;