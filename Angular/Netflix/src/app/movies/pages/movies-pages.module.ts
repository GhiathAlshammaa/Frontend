import { NgModule } from '@angular/core';
import {
  MovieExternalInfoComponent,
  MovieInternalInfoComponent,
  MovieStaffComponent,
  MovieSimilarGridComponent,
  TrailerModalComponent,
  MovieGenresBarComponent,
  MovieDetailComponent,
  MovieListComponent,
  ActorDetailComponent,
} from '.';
import { GenreMoviesListComponent, GenresHomeComponent } from './components';
import { SharedModule } from '@app/shared';
import { MoviesSliderComponent } from './components/movie-list/movies-slider/movies-slider.component';

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
    ActorDetailComponent,
    MoviesSliderComponent,
  ],
  imports: [SharedModule],
  exports: [
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
    ActorDetailComponent,
  ],
})
export class MoviesPagesModule {}
