import { NgModule } from '@angular/core';
import { MaterialModule } from './material.module';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [],
  imports: [CommonModule, BrowserModule, FormsModule, MaterialModule],
  exports: [FormsModule, BrowserModule, MaterialModule],
})
export class SharedModule {}
