import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Store, select } from '@ngrx/store';
import { Task } from './store/list/list.models';
import * as fromRoot from './store';
import * as fromList from './store/list';

import { FormComponent } from './components/form/form.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  tasks$: Observable<Task[]>;

  constructor(
    public dialog: MatDialog,
    private store: Store<fromRoot.TasksState>
  ) {}

  ngOnInit(): void {
    this.tasks$ = this.store.pipe(select(fromList.selectAll));
    this.store.dispatch(new fromList.Read());
  }

  onAdd(): void {
    const res = this.dialog.open(FormComponent, {
      width: '650px',
      height: '220px',
      data: {},
    });
    console.log('click: ');
  }

  onEdit(value: Task): void {
    this.dialog.open(FormComponent, {
      width: '650px',
      height: '220px',
      data: { value },
    });
  }
  onDelete(id: string): void {
    this.store.dispatch(new fromList.Delete(id));
  }
}
