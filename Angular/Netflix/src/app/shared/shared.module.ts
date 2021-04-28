import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent, FooterComponent } from './layout';
import { RouterModule } from '@angular/router';
import { MovieComponent } from './components/movie/movie.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, MovieComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  exports: [HeaderComponent, FooterComponent, MovieComponent],
})
export class SharedModule {}
