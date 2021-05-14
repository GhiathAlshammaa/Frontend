import { NgModule } from '@angular/core';
import { GenresModule } from './genres/genres.module';
import { SharedModule } from '@app/shared';
import { MoviesSliderModule } from './movies-slider/movies-slider.module';

@NgModule({
  declarations: [],
  imports: [SharedModule, MoviesSliderModule, GenresModule],
  exports: [GenresModule],
})
export class MovieListModule {}
