import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { StarComponent } from './star/star.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    RouterModule,
    FormsModule
  ],
  declarations: [StarComponent],
  exports: [BrowserAnimationsModule, RouterModule]
})
export class SharedModule { }
