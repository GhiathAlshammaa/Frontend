import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeriesRoutingModule } from './series-routing.module';
import { SerieslistComponent } from './pages/serieslist/serieslist.component';

@NgModule({
  declarations: [SerieslistComponent],
  imports: [CommonModule, SeriesRoutingModule],
  exports: [SerieslistComponent],
})
export class SeriesModule {}
