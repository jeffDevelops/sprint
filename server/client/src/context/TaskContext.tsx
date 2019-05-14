import React, { Component, createContext } from 'react';
import { createPortal } from 'react-dom';

import EditModal from '../components/EditModal';

import { post, get, put, destroy } from '../http/index';
import { AxiosResponse } from 'axios';

const editModalNode = document.getElementById('edit_modal');

export interface ISubtask {
  name: string
  description: string
  complete: boolean
  points: number
}

export interface IDbSubtask extends ISubtask {
  _id: string
  belongsToTask: string
}

export interface ITask {
  name: string
  description?: string
  complete: boolean
  subtasks: IDbSubtask[]
}

export interface IDbTask extends ITask {
  _id: string
}

export class Task implements ITask {
  constructor(name: string) {
    this.name = name;
  }

  name: string;
  complete = false;
  subtasks: IDbSubtask[] = [] as IDbSubtask[];
}

export interface ITaskContext {
  tasks: IDbTask[]
  loading: boolean
  currentTask: IDbTask | null
  currentSubtask: IDbSubtask | null
  createTask: (taskName: string) => Promise<void>
  getTasks: () => Promise<void>
  selectTask: (id: string) => void
  updateTask: (task: IDbTask) => Promise<void>
  selectSubtask: (id: string) => void
  updateSubtask: (subtask: IDbSubtask) => Promise<void>
  toggleEditModal: () => void
}

const TaskContext = createContext<ITaskContext>({
  tasks: [],
  loading: false,
  currentTask: null,
  currentSubtask: null,
  createTask: async (taskName: string) => {},
  getTasks: async () => {},
  selectTask: (id: string) => {},
  updateTask: async (task: IDbTask) => {},
  selectSubtask: (id: string) => {},
  updateSubtask: async (subtask: IDbSubtask) => {},
  toggleEditModal: () => {}
});

interface IState {
  tasks: IDbTask[]
  loading: boolean
  currentTask: IDbTask | null
  currentSubtask: IDbSubtask | null
  shouldShowEditModal: boolean
}

export default class TaskProvider extends Component<{}, IState> {
  state = {
    tasks: [] as IDbTask[],
    loading: true,
    currentTask: null,
    currentSubtask: null,
    shouldShowEditModal: false,
  }

  componentDidMount() {
    this.getTasks();
  }

  createTask = async(taskName: string): Promise<void> => {
    console.log('Creating Task... allegedly...')
    const newTask = new Task(taskName);
    const response: AxiosResponse<any> = await post('/api/tasks', newTask)
      .catch(error => {
        alert('Could not connect to the Sprint server. Please check your connectivity and try again.');
        console.error(error);
        return error;
      });

    if (response && response.data) {
      const insertedTask: IDbTask = response.data;
      const tasks: IDbTask[] = [...this.state.tasks];
      tasks.unshift(insertedTask);
      this.setState({
        currentTask: insertedTask,
        tasks,
        shouldShowEditModal: true
      });
    }
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

  updateTask = async(task: IDbTask): Promise<void> => {
    console.log({ task });
    const response: AxiosResponse<any> = await put(`/api/tasks/${task._id}`, task)
      .catch(error => {
        console.error(error);
        return error;
      });

    if (response && response.data) {
      const tasks: IDbTask[] = [...this.state.tasks];
      const indexToReplace: number = tasks.map(task => task._id).indexOf(task._id);
      tasks.splice(indexToReplace, 1, response.data);
      this.setState({ tasks, currentTask: response.data });
    }
  }

  selectTask = (id: string): void => {
    const isolatedTask: IDbTask[] = this.state.tasks.filter(task => task._id === id);
    if (isolatedTask.length === 1) {
      this.setState({
        currentTask: isolatedTask[0],
        currentSubtask: null,
      });
    } else {
      this.setState({
        currentTask: null,
        currentSubtask: null,
      });
    }
  }

  selectSubtask = (id: string): void => {
    const unflattenedSubtasks: IDbSubtask[][] = this.state.tasks.map(task => task.subtasks);
    const flattenedSubtasks: IDbSubtask[] = ([] as IDbSubtask[]).concat.apply([], unflattenedSubtasks);

    const isolatedSubtask = flattenedSubtasks.filter(task => task._id === id);
    if (isolatedSubtask.length === 1) {
      this.setState({ currentSubtask: isolatedSubtask[0] });
    } else {
      this.setState({ currentTask: null });
    }
  }

  updateSubtask = async (subtask: IDbSubtask): Promise<void> => {
    console.log({ subtask });
    const response: AxiosResponse<any> = await put(`/api/subtasks/${subtask._id}`, subtask)
      .catch(error => {
        console.error(error);
        return error;
      });

    if (response && response.data) {
      const tasks: IDbTask[] = [...this.state.tasks];
      const taskIndexToUpdate: number = tasks.map(task => task._id).indexOf(subtask.belongsToTask);
      const taskToUpdate: IDbTask = tasks[taskIndexToUpdate];
      const subtaskIndexToUpdate: number = taskToUpdate.subtasks.map(existingSubtask => existingSubtask._id).indexOf(subtask._id);
      taskToUpdate.subtasks[subtaskIndexToUpdate] = response.data;
      this.setState({ tasks, currentTask: taskToUpdate });
    }
  }

  toggleEditModal = () => this.setState({ shouldShowEditModal: !this.state.shouldShowEditModal });

  render() {
    return (
      <TaskContext.Provider value={{
        loading: this.state.loading,
        tasks: this.state.tasks as IDbTask[],
        createTask: this.createTask,
        getTasks: this.getTasks,
        selectTask: this.selectTask,
        updateTask: this.updateTask,
        selectSubtask: this.selectSubtask,
        updateSubtask: this.updateSubtask,
        currentTask: this.state.currentTask,
        currentSubtask: this.state.currentSubtask,
        toggleEditModal: this.toggleEditModal,
      }}>

        { this.state.shouldShowEditModal && // determine whether to actually show modal
          editModalNode && // ensure node in DOM exists to inject portal
          this.state.currentTask && // certify non-null for current task
          
          createPortal(
            <EditModal
              task={ this.state.currentTask! }
            />,
            editModalNode
          )
        }

        { this.props.children }
        
      </TaskContext.Provider>
    );
  }
}

export { TaskContext };