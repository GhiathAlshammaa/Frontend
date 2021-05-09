import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  MovieListComponent,
  MovieDetailComponent,
  MovieExternalInfoComponent,
  MovieInternalInfoComponent,
  MovieStaffComponent,
  MovieSimilarGridComponent,
  TrailerModalComponent,
  MovieGenresBarComponent,
} from './pages';
import { SharedModule } from '@app/shared';
import { GenreMoviesListComponent } from './pages/components';
import { GenresHomeComponent } from './pages/components/movie-list/genres-home/genres-home.component';

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
        path: 'genres/:id',
        component: GenreMoviesListComponent,
      },
    ],
  },
  {
    path: ':id',
    component: MovieDetailComponent,
    data: { pageTitle: 'Movie' },
  },
  {
    // When User clicks on a Movie of SimilarMovies in MovieDetail
    path: 'm/:id',
    component: MovieDetailComponent,
    data: { pageTitle: 'MovieDetail' },
  },
];

@NgModule({
  declarations: [
    MovieListComponent,
    MovieDetailComponent,
    MovieExternalInfoComponent,
    MovieInternalInfoComponent,
    MovieStaffComponent,
    MovieSimilarGridComponent,
    TrailerModalComponent,
    MovieGenresBarComponent,
    GenreMoviesListComponent,
    GenresHomeComponent,
  ],
  imports: [SharedModule, CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule, MovieListComponent, MovieDetailComponent],
})
export class MoviesRoutingModule {}
