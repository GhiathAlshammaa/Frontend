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

@NgModule({
  declarations: [
    MovieExternalInfoComponent,
    MovieInternalInfoComponent,
    MovieStaffComponent,
    MovieSimilarGridComponent,
    TrailerModalComponent,
    MoviesSliderComponent,
  ],
  imports: [SharedModule, ActorDetailModule, MovieListModule],
  exports: [
    MovieExternalInfoComponent,
    MovieInternalInfoComponent,
    MovieStaffComponent,
    MovieSimilarGridComponent,
    TrailerModalComponent,
    MoviesSliderComponent,
    ActorDetailModule,
    MovieListModule,
  ],
})
export class MoviesComponentsModule {}
