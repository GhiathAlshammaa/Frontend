import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {
  HomeComponent,
  PageNotFoundComponent,
  ReportComponent,
  TaskListsComponent,
} from './core/pages/components';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '404', component: PageNotFoundComponent },
      { path: 'home', component: HomeComponent },
      { path: 'task-lists', component: TaskListsComponent },
      { path: 'report', component: ReportComponent },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home',
      },
    ],
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: '404',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
