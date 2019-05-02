import React, { Component, createContext } from 'react';

import { get } from '../http/index';
import { AxiosResponse } from 'axios';

interface ISubtask {
  name: string,
  description: string,
  complete: boolean,
  points: number,
}

interface ITask {
  name: string,
  description?: string,
  complete: boolean,
  subtasks: ISubtask[],
}

export interface ITaskContext {
  tasks: ITask[]
  getTasks: () => Promise<void>
}

const TaskContext = createContext<ITaskContext>({
  tasks: [],
  getTasks: async function() { return }
});

interface IState {
  tasks: ITask[]
}

export default class TaskProvider extends Component<{}, IState> {
  state = {
    tasks: [] as ITask[],
  }

  componentDidMount() {
    this.getTasks();
  }

  getTasks = async (): Promise<void> => {
    const response: AxiosResponse<any> = await get('/api/tasks')
      .catch(error => {
        console.error(error);
        alert('Could not connect to the Sprint server. Please check your connectivity and try again.');
        return error;
      });

    if (response && response.data) return this.setState({ tasks: response.data });
    return;
  }

  render() {
    return (
      <TaskContext.Provider value={{
        tasks: this.state.tasks as ITask[],
        getTasks: this.getTasks,
      }}>

        { this.props.children }
        
      </TaskContext.Provider>
    );
  }
}

export { TaskContext };


