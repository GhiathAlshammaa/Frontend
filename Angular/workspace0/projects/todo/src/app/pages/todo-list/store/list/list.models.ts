import { Task as DBTask } from '@todo-app/models/backend/task';

export interface Task extends DBTask {
  id: string;
}

export type TaskCreateRequest = DBTask;
