import { NgModule } from '@angular/core';

import { MoviesRoutingModule } from './movies-routing.module';

@NgModule({
  imports: [MoviesRoutingModule],
  exports: [MoviesRoutingModule],
})
export class MoviesModule {}
