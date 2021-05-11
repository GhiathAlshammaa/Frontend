import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '@app/shared';
import { MoviesPagesModule } from './pages/movies-pages.module';

import { MovieListComponent, MovieDetailComponent } from './pages';
import {
  GenresHomeComponent,
  GenreMoviesListComponent,
} from './pages/components';

const routes: Routes = [
  {
    path: '',
    component: MovieListComponent,
    data: { pageTitle: 'Movie List' },
    children: [
      {
        path: '',
        redirectTo: 'genres',
        pathMatch: 'full',
      },
      {
        path: 'genres',
        component: GenresHomeComponent,
      },
      {
        path: 'genres/:id/:name',
        component: GenreMoviesListComponent,
      },
    ],
  },
  {
    path: ':id',
    component: MovieDetailComponent,
    data: { pageTitle: 'Movie' },
  },
];

@NgModule({
  imports: [SharedModule, MoviesPagesModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MoviesRoutingModule {}
