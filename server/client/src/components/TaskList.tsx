import React, { useContext } from 'react';
import styled from 'styled-components';

import { TaskContext, ITaskContext, ITask } from '../context/TaskContext';

import SpaceBetweenRow from '../styled/FormatHelpers/SpaceBetweenRow';
import FlexStartCol from '../styled/FormatHelpers/FlexStartCol';
import FlexStartRow from '../styled/FormatHelpers/FlexStartRow';
import ListItem from '../styled/ListItem';
import ScrollableContainer from '../styled/ScrollableContainer';
import NoTasks from '../styled/NoData';
import P from '../styled/P';

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

  &:hover {
    ${Metric} {
      color: #fff;
      transition: color ${props => props.theme.transitions.in};
    }
  }
`;

const CompletionIndicator = styled.span`
  display: inline;
  padding: 0 10px;
  background-color: ${props => props.theme.colors.gray};
  color: #fff;
  border-radius: ${props => props.theme.borderRadius};
  height: 30px;
  display: flex;
  align-items: center;
  margin: 3px 0;
  font-size: .8em;
`;

const TaskList: React.FC = () => {
  const taskContext: ITaskContext = useContext(TaskContext);
  const { tasks, loading, currentTask, selectTask } = taskContext;
  
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

          <SpaceBetweenRow>

            <FlexStartCol
              alignItems="flex-start"
              margin="0"
              width="40%"
            >

              {/* TODO: */}

              <FlexStartRow>
                <CompletionIndicator>100%</CompletionIndicator>
                <Metric>Complete</Metric>
              </FlexStartRow>
              
              <FlexStartRow>
                <CompletionIndicator>5 / 10</CompletionIndicator>
                <Metric>Subtasks</Metric>
              </FlexStartRow>
              

            </FlexStartCol>

            <P textAlign="right" width="60%">{ task.name }</P>

          </SpaceBetweenRow>

        </Task>
      ))}
    </ScrollableContainer>
  )
}

export default TaskList;