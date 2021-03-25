import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';

import { firestore } from 'firebase/app';
import { AngularFirestore } from '@angular/fire/firestore';

import { Observable, from, of } from 'rxjs';
import { map, switchMap, catchError, take } from 'rxjs/operators';

import { extractDocumentChangeActionData } from '@todo-app/shared/utils/data';

import { Task, TaskCreateRequest } from './list.models';

import * as fromActions from './list.actions';

type Action = fromActions.All;

@Injectable()
export class ListEffects {
  constructor(private actions: Actions, private afs: AngularFirestore) {}

  @Effect()
  read: Observable<Action> = this.actions.pipe(
    ofType(fromActions.Types.READ),
    switchMap(() =>
      this.afs
        .collection('tasks', (ref) => ref.orderBy('created'))
        .snapshotChanges()
        .pipe(
          take(1),
          map((changes) =>
            changes.map((x) => extractDocumentChangeActionData(x))
          ),
          map((items: Task[]) => new fromActions.ReadSuccess(items)),
          catchError((err) => of(new fromActions.ReadError(err.message)))
        )
    )
  );

  @Effect()
  create: Observable<Action> = this.actions.pipe(
    ofType(fromActions.Types.CREATE),
    map((action: fromActions.Create) => action.task),
    map((task: TaskCreateRequest) => ({
      ...task,
      created: firestore.FieldValue.serverTimestamp(),
    })),
    switchMap((request: TaskCreateRequest) =>
      from(this.afs.collection('tasks').add(request)).pipe(
        map((res) => ({ ...request, id: res.id })),
        map((task: Task) => new fromActions.CreateSuccess(task)),
        catchError((err) => of(new fromActions.CreateError(err.message)))
      )
    )
  );

  @Effect()
  update: Observable<Action> = this.actions.pipe(
    ofType(fromActions.Types.UPDATE),
    map((action: fromActions.Update) => action.task),
    map((task: Task) => ({
      ...task,
      updated: firestore.FieldValue.serverTimestamp(),
    })),
    switchMap((task) =>
      from(this.afs.collection('tasks').doc(task.id).set(task)).pipe(
        map(() => new fromActions.UpdateSuccess(task.id, task)),
        catchError((err) => of(new fromActions.UpdateError(err.message)))
      )
    )
  );

  @Effect()
  delete: Observable<Action> = this.actions.pipe(
    ofType(fromActions.Types.DELETE),
    map((action: fromActions.Delete) => action.id),
    switchMap((id) =>
      from(this.afs.collection('tasks').doc(id).delete()).pipe(
        map(() => new fromActions.DeleteSuccess(id)),
        catchError((err) => of(new fromActions.DeleteError(err.message)))
      )
    )
  );
}
