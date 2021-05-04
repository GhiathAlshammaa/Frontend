import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  MovieListComponent,
  MovieDetailComponent,
  MovieExternalInfoComponent,
  MovieInternalInfoComponent,
} from './pages';
import { SharedModule } from '@app/shared';

const routes: Routes = [
  {
    path: '',
    component: MovieListComponent,
    data: { pageTitle: 'Movie List' },
  },
  {
    path: ':id',
    component: MovieDetailComponent,
    data: { pageTitle: 'Movie' },
  },
];

@NgModule({
  declarations: [
    MovieListComponent,
    MovieDetailComponent,
    MovieExternalInfoComponent,
    MovieInternalInfoComponent,
  ],
  imports: [SharedModule, CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule, MovieListComponent, MovieDetailComponent],
})
export class MoviesRoutingModule {}
