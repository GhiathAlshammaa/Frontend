import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomeComponent, PageNotFoundComponent } from './pages';
import { SelectiveStrategy } from './selective-strategy.service';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: 'movies',
    data: { preload: false }, // change to true, when user use this route
    loadChildren: () => import('@app/movies').then((m) => m.MoviesModule),
  },
  {
    path: 'series',
    data: { preload: false },
    loadChildren: () => import('@app/series').then((m) => m.SeriesModule),
  },
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  declarations: [HomeComponent, PageNotFoundComponent],
  imports: [
    RouterModule.forRoot(routes, {
      enableTracing: false,
      preloadingStrategy: SelectiveStrategy,
    }),
  ],
  exports: [RouterModule, HomeComponent, PageNotFoundComponent],
})
export class AppRoutingModule {}
