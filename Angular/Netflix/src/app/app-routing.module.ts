import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent, PageNotFoundComponent } from './pages';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  declarations: [HomeComponent, PageNotFoundComponent],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule, HomeComponent, PageNotFoundComponent],
})
export class AppRoutingModule {}
