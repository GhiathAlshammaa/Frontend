import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieListComponent, MovieDetailComponent } from './pages';

const routes: Routes = [
  {
    path: '',
    component: MovieListComponent,
    data: { pageTitle: 'Movie List' },
  },
  {
    path: ':id',
    component: MovieDetailComponent,
    data: { pageTitle: 'Movie' },
  },
];

@NgModule({
  declarations: [MovieListComponent, MovieDetailComponent],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule, MovieListComponent, MovieDetailComponent],
})
export class MoviesRoutingModule {}
