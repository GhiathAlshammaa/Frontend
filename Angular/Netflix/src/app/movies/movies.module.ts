import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  MovieDetailComponent,
  MovieListComponent,
  MoviesRoutingModule,
} from '.';

@NgModule({
  declarations: [MovieDetailComponent, MovieListComponent],
  imports: [CommonModule, MoviesRoutingModule],
  exports: [MovieDetailComponent, MovieListComponent, MoviesRoutingModule],
})
export class MoviesModule {}
