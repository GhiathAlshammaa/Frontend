import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  GenreMoviesListComponent,
  GenresHomeComponent,
  MovieGenresBarComponent,
} from '.';
import { SharedModule } from '@app/shared';
import { MoviesSliderComponent } from '..';
import { MoviesSliderModule } from '../movies-slider/movies-slider.module';

@NgModule({
  declarations: [
    MovieGenresBarComponent,
    GenreMoviesListComponent,
    GenresHomeComponent,
  ],
  imports: [SharedModule, MoviesSliderModule],
  exports: [
    MovieGenresBarComponent,
    GenreMoviesListComponent,
    GenresHomeComponent,
  ],
})
export class GenresModule {}
