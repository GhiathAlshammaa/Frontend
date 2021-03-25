import { Action } from '@ngrx/store';
import { Task, TaskCreateRequest } from './list.models';

export enum Types {
  READ = '[Tasks] Read: Start',
  READ_SUCCESS = '[Tasks] Read: Success',
  READ_ERROR = '[Tasks] Read: Error',

  CREATE = '[Tasks] Create: Start',
  CREATE_SUCCESS = '[Tasks] Create: Success',
  CREATE_ERROR = '[Tasks] Create: Error',

  UPDATE = '[Tasks] Update: Start',
  UPDATE_SUCCESS = '[Tasks] Update: Success',
  UPDATE_ERROR = '[Tasks] Update: Error',

  DELETE = '[Tasks] Delete: Start',
  DELETE_SUCCESS = '[Tasks] Delete: Success',
  DELETE_ERROR = '[Tasks] Delete: Error',
}

// Read
export class Read implements Action {
  readonly type = Types.READ;
  constructor() {}
}

export class ReadSuccess implements Action {
  readonly type = Types.READ_SUCCESS;
  constructor(public items: Task[]) {}
}

export class ReadError implements Action {
  readonly type = Types.READ_ERROR;
  constructor(public error: string) {}
}

// Create
export class Create implements Action {
  readonly type = Types.CREATE;
  constructor(public task: TaskCreateRequest) {}
}

export class CreateSuccess implements Action {
  readonly type = Types.CREATE_SUCCESS;
  constructor(public items: Task) {}
}

export class CreateError implements Action {
  readonly type = Types.CREATE_ERROR;
  constructor(public error: string) {}
}

// Update
export class Update implements Action {
  readonly type = Types.UPDATE;
  constructor(public task: Task) {}
}

export class UpdateSuccess implements Action {
  readonly type = Types.UPDATE_SUCCESS;
  constructor(public Id: string, public task: Partial<Task>) {}
}

export class UpdateError implements Action {
  readonly type = Types.UPDATE_ERROR;
  constructor(public error: string) {}
}

// Delete
export class Delete implements Action {
  readonly type = Types.DELETE;
  constructor(public id: string) {}
}
export class DeleteSuccess implements Action {
  readonly type = Types.DELETE_SUCCESS;
  constructor(public id: string) {}
}
export class DeleteError implements Action {
  readonly type = Types.DELETE_ERROR;
  constructor(public error: string) {}
}

export type All =
  | Read
  | ReadSuccess
  | ReadError
  | Create
  | CreateSuccess
  | CreateError
  | Update
  | UpdateSuccess
  | UpdateError
  | Delete
  | DeleteSuccess
  | DeleteError;
