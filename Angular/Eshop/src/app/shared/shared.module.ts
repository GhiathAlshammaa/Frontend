import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    RouterModule 
  ],
  declarations: [],
  exports: [BrowserAnimationsModule, RouterModule]
})
export class SharedModule { }
