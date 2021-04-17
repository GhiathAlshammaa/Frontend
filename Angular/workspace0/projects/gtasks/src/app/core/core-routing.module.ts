import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {
  ReportComponent,
  TaskListsComponent,
} from './pages/components';

const routes: Routes = [
    { path: 'task-lists', component: TaskListsComponent },
    { path: 'report', component: ReportComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoreRoutingModule {}
