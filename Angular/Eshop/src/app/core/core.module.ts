import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
/* Angular Material */
import { HeaderComponent } from './header/header.component';
import { SharedModule } from '../shared/shared.module';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    SharedModule,
    // Angular Material
    MatToolbarModule,
    MatButtonModule
  ],
  exports: [HeaderComponent]
})
export class CoreModule { }
