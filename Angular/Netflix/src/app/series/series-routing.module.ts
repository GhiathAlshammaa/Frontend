import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SerieListComponent, SerieDetailComponent } from './pages';

const routes: Routes = [
  { path: 'series', component: SerieListComponent },
  { path: 'series/:id', component: SerieDetailComponent },
];

@NgModule({
  declarations: [SerieListComponent, SerieDetailComponent],
  imports: [RouterModule.forChild(routes)],
  exports: [SerieListComponent, SerieDetailComponent, RouterModule],
})
export class SeriesRoutingModule {}
