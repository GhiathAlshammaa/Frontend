import { NgModule } from '@angular/core';
import { MaterialModule } from './material.module';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [CommonModule, MaterialModule],
  exports: [FormsModule, MaterialModule],
})
export class SharedModule {}
