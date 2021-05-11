import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent, FooterComponent } from './layout';
import { RouterModule } from '@angular/router';
import { MovieComponent } from './components/movie/movie.component';
import { SafePipe } from '@app/core/utils/safe.pipe';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, MovieComponent, SafePipe],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule],
  exports: [
    CommonModule,
    HeaderComponent,
    FooterComponent,
    SafePipe,
    MovieComponent,
    RouterModule,
  ],
})
export class SharedModule {}
