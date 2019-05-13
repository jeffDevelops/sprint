import React, { useContext } from 'react';
import styled from 'styled-components';

import { TaskContext, ITaskContext } from '../context/TaskContext';

import FlexCol from '../styled/FormatHelpers/FlexCol';
import FlexRow from '../styled/FormatHelpers/FlexRow';
import ListItem from '../styled/ListItem';
import ScrollableContainer from '../styled/ScrollableContainer';
import NoTasks from '../styled/NoData';
import P from '../styled/P';
import CompletionIndicator from '../styled/CompletionIndicator';
import LinkStyleButton from '../styled/LinkStyleButton';

const Metric = styled.span`
  display: inline;
  color: ${props => props.theme.colors.gray};
  margin-left: 10px;
  font-size: .8em;
  transition: color ${props => props.theme.transitions.out};
`;

const Task = styled(ListItem)`
  ${Metric} {
    color: ${props => props.active ? '#fff' : 'inherit'};
  }
  ${LinkStyleButton} {
    color: ${props => props.active ? '#fff' : props.theme.colors.main};
  }
`;

const TaskList: React.FC = () => {
  const { tasks, loading, currentTask, selectTask, toggleEditModal } = useContext(TaskContext);
  
  return (
    <ScrollableContainer>
      { tasks.length === 0 && loading &&
        <NoTasks>Loading...</NoTasks>
      }

      { tasks.length === 0 && !loading &&
        <NoTasks>No tasks to display</NoTasks>
      }

      { tasks.length > 0 && tasks.map(task => (
        <Task
          onClick={ () => selectTask(task._id) }
          key={ task._id }
          active={ currentTask ? task._id === currentTask._id : false }
        >

          <FlexRow justifyContent="space-between">

            <FlexCol
              justifyContent="flex-start"
              alignItems="flex-start"
              margin="0"
              width="40%"
            >

              {/* TODO: */}

              <FlexRow
                justifyContent="flex-start"
              >
                <CompletionIndicator>100%</CompletionIndicator>
                <Metric>Complete</Metric>
              </FlexRow>
              
              <FlexRow
                justifyContent="flex-start"
              >
                <CompletionIndicator>5 / 10</CompletionIndicator>
                <Metric>Subtasks</Metric>
              </FlexRow>
              

            </FlexCol>

            <FlexCol
              justifyContent="flex-start"
              alignItems="flex-end"
            >
              <P textAlign="right" fontWeight="600" width="75%">{ task.name }</P>
              <LinkStyleButton
                onClick={ toggleEditModal }
              >Edit</LinkStyleButton>
            </FlexCol>

          </FlexRow>

        </Task>
      ))}
    </ScrollableContainer>
  )
}

export default TaskList;