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