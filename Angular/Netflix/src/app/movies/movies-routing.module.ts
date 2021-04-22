import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieListComponent, MovieDetailComponent } from './pages';

const routes: Routes = [
  { path: 'movies', component: MovieListComponent },
  { path: 'movies/:id', component: MovieDetailComponent },
];

@NgModule({
  declarations: [MovieListComponent, MovieDetailComponent],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule, MovieListComponent, MovieDetailComponent],
})
export class MoviesRoutingModule {}
