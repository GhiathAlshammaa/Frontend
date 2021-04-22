import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieDetailComponent } from './pages/movie-detail/movie-detail.component';
import { MovieListComponent } from './pages/movie-list/movie-list.component';

const routes: Routes = [
  { path: 'movies', component: MovieListComponent },
  { path: 'movies/:id', component: MovieDetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MoviesRoutingModule {}
