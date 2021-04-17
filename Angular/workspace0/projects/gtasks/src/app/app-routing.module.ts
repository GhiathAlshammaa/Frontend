import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent, PageNotFoundComponent } from './core/pages/components';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '404', component: PageNotFoundComponent },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
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
