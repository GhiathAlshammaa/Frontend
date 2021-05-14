import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared';
import {
  MovieExternalInfoComponent,
  MovieInternalInfoComponent,
  MovieStaffComponent,
  MovieSimilarGridComponent,
  TrailerModalComponent,
  MoviesSliderComponent,
} from '.';
import { ActorDetailModule } from './actor-detail/actor-detail.module';
import { MovieListModule } from './movie-list/movie-list.module';
import { MovieDetailModule } from './movie-detail/movie-detail.module';

@NgModule({
  declarations: [
    MovieExternalInfoComponent,
    MovieInternalInfoComponent,
    MovieStaffComponent,
    MovieSimilarGridComponent,
    TrailerModalComponent,
  ],
  imports: [SharedModule, ActorDetailModule, MovieListModule, MovieDetailModule],
  exports: [
    MovieExternalInfoComponent,
    MovieInternalInfoComponent,
    MovieStaffComponent,
    MovieSimilarGridComponent,
    TrailerModalComponent,
    ActorDetailModule,
    MovieListModule,
    MovieDetailModule
  ],
})
export class MoviesComponentsModule {}
