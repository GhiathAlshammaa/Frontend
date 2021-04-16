import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers, effects } from './store';

import { MatDialogModule } from '@angular/material/dialog';
import { ButtonModule } from '@todo-app/shared/buttons';

import { TodoListRoutingModule } from './todo-list-routing.module';
import { TodoListComponent } from './todo-list.component';
import { FormModule } from './components/form/form.module';

import { BrowserModule } from '@angular/platform-browser';
import { TaskComponent } from './components/task/task.component';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [TodoListComponent, TaskComponent],
  imports: [
    CommonModule,
    // BrowserModule,
    // StoreModule.forFeature('tasks', reducers),
    // EffectsModule.forFeature(effects),
    StoreModule.forRoot(reducers, {
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
      },
    }),
    EffectsModule.forRoot(effects),
    TodoListRoutingModule,
    MatDialogModule,
    ButtonModule,
    FormModule,
  ],
})
export class TodoListModule {}
