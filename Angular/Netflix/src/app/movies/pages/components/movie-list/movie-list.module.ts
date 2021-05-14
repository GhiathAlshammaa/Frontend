import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenresModule } from './genres/genres.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    GenresModule
  ],
  exports: [GenresModule]
})
export class MovieListModule { }
