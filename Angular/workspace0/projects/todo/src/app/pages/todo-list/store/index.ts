import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

import * as fromList from './list/list.reducer';
import { ListEffects } from './list/list.effects';

export interface TasksState {
  list: fromList.ListState;
}

export const reducers: ActionReducerMap<TasksState> = {
  list: fromList.reducer,
};

export const effects: any[] = [ListEffects];

export const getTasksState = createFeatureSelector<TasksState>('tasks');
