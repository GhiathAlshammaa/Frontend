import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesRoutingModule } from './movies-routing.module';
import { MovieDetailComponent, MovieListComponent } from '.';

@NgModule({
  declarations: [MovieDetailComponent, MovieListComponent],
  imports: [CommonModule, MoviesRoutingModule],
  exports: [MovieDetailComponent, MovieListComponent],
})
export class MoviesModule {}
