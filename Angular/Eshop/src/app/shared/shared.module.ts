import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { StarComponent } from './star/star.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    RouterModule 
  ],
  declarations: [StarComponent],
  exports: [BrowserAnimationsModule, RouterModule]
})
export class SharedModule { }
