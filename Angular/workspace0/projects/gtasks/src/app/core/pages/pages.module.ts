import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  HomeComponent,
  PageNotFoundComponent,
  TaskListsComponent,
  ReportComponent,
} from './components';
import { SharedModule } from '../../shared/shared.module';
import { TasklistsModule } from '../../tasklists/tasklists.module';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    HomeComponent,
    PageNotFoundComponent,
    TaskListsComponent,
    ReportComponent,
  ],

  imports: [SharedModule, TasklistsModule],
  exports: [
    HomeComponent,
    TaskListsComponent,
    PageNotFoundComponent,
    ReportComponent,
  ],
})
export class PagesModule {}
