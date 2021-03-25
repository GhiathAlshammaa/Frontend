import { createSelector } from '@ngrx/store';
import { getTasksState, TasksState } from '../index';

import { listAdapter } from './list.reducer';

export const getListState = createSelector(
  getTasksState,
  (state: TasksState) => state.list
);

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = listAdapter.getSelectors(getListState);

export const selectEntityById = createSelector(
  selectEntities,
  (entities, props: { id: string }) => {
    return entities[props.id];
  }
);
