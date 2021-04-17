import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  HomeComponent,
  PageNotFoundComponent,
  TaskListsComponent,
  ReportComponent,
} from './components';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    HomeComponent,
    PageNotFoundComponent,
    TaskListsComponent,
    ReportComponent,
  ],

  imports: [SharedModule],
  exports: [
    HomeComponent,
    TaskListsComponent,
    PageNotFoundComponent,
    ReportComponent,
  ],
})
export class PagesModule {}
