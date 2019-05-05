import React, { Component, createContext } from 'react';

import { get } from '../http/index';
import { AxiosResponse } from 'axios';

export interface ISubtask {
  _id: string
  name: string
  description: string
  complete: boolean
  points: number
}

export interface ITask {
  _id: string
  name: string
  description?: string
  complete: boolean
  subtasks: ISubtask[]
}

export interface ITaskContext {
  tasks: ITask[]
  loading: boolean
  currentTask: ITask | null
  currentSubtask: ISubtask | null
  getTasks: () => Promise<void>
  selectTask: (id: string) => void
  selectSubtask: (id: string) => void
}

const TaskContext = createContext<ITaskContext>({
  tasks: [],
  loading: false,
  currentTask: null,
  currentSubtask: null,
  getTasks: async () => {},
  selectTask: (id: string) => {},
  selectSubtask: (id: string) => {}
});

interface IState {
  tasks: ITask[]
  loading: boolean
  currentTask: ITask | null
  currentSubtask: ISubtask | null
}

export default class TaskProvider extends Component<{}, IState> {
  state = {
    tasks: [] as ITask[],
    loading: true,
    currentTask: null,
    currentSubtask: null,
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

    if (response && response.data) return this.setState({
      tasks: response.data,
      loading: false,
      currentTask: response.data[0] ? response.data[0] : null,
    });
  }

  selectTask = (id: string): void => {
    const isolatedTask: ITask[] = this.state.tasks.filter(task => task._id === id);
    if (isolatedTask.length === 1) {
      this.setState({ currentTask: isolatedTask[0] });
    } else {
      this.setState({ currentTask: null });
    }
  }

  selectSubtask = (id: string): void => {
    const unflattenedSubtasks: ISubtask[][] = this.state.tasks.map(task => task.subtasks);
    const flattenedSubtasks: ISubtask[] = ([] as ISubtask[]).concat.apply([], unflattenedSubtasks);

    console.log({ flattenedSubtasks })

    const isolatedSubtask = flattenedSubtasks.filter(task => task._id === id);
    if (isolatedSubtask.length === 1) {
      this.setState({ currentSubtask: isolatedSubtask[0] });
    } else {
      this.setState({ currentTask: null });
    }
  }

  render() {
    return (
      <TaskContext.Provider value={{
        loading: this.state.loading,
        tasks: this.state.tasks as ITask[],
        getTasks: this.getTasks,
        selectTask: this.selectTask,
        selectSubtask: this.selectSubtask,
        currentTask: this.state.currentTask,
        currentSubtask: this.state.currentSubtask,
      }}>

        { this.props.children }
        
      </TaskContext.Provider>
    );
  }
}

export { TaskContext };


