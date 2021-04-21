import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent, PageNotFoundComponent } from '.';

@NgModule({
  declarations: [HomeComponent, PageNotFoundComponent],
  imports: [CommonModule],
  exports: [HomeComponent, PageNotFoundComponent],
})
export class PagesModule {}
