import { NgModule } from '@angular/core';
import { CoreRoutingModule } from './core-routing.module';
import { PagesModule } from './pages/pages.module';
import { HeaderComponent } from './components';
// import { MaterialModule } from '../shared/material.module';
import { SharedModule } from '../shared/shared.module';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    SharedModule,
    BrowserModule,
    CommonModule,
    PagesModule,
    CoreRoutingModule,
  ],
  exports: [HeaderComponent, PagesModule],
})
export class CoreModule {}
