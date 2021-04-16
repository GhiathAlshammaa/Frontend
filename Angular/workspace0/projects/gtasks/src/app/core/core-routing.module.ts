import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {
  HomeComponent,
  PageNotFoundComponent,
  TaskListsComponent,
} from './pages/components';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '404', component: PageNotFoundComponent },
      { path: 'home', component: HomeComponent },
      { path: 'task', component: TaskListsComponent },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoreRoutingModule {}
