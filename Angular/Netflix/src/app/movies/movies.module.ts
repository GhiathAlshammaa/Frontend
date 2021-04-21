import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesRoutingModule } from './movies-routing.module';
import { MovieslistComponent } from '.';

@NgModule({
  declarations: [MovieslistComponent],
  imports: [CommonModule, MoviesRoutingModule],
  exports: [MovieslistComponent],
})
export class MoviesModule {}
