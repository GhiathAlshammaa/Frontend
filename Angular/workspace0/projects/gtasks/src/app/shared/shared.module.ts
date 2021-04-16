import { NgModule } from '@angular/core';
import { MaterialModule } from './material.module';
import { HeaderComponent } from './components/header/header.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, BrowserAnimationsModule, FormsModule, MaterialModule],
  exports: [
    CommonModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule,
    HeaderComponent,
  ],
})
export class SharedModule {}
