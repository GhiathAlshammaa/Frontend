import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MoviesRoutingModule } from './movies-routing.module';
import { MovieGenresBarComponent, MovieListComponent } from './pages';

@NgModule({
  imports: [MoviesRoutingModule],
  exports: [MoviesRoutingModule],

})
export class MoviesModule {}
