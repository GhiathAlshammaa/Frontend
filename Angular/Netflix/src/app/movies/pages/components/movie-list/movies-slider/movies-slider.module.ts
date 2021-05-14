import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesSliderComponent } from './movies-slider.component';



@NgModule({
  declarations: [MoviesSliderComponent],
  imports: [
    CommonModule
  ],
  exports: [MoviesSliderComponent]
})
export class MoviesSliderModule { }
