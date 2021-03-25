import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Button } from 'protractor';
import { ButtonModule } from './button/button.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, ButtonModule],
  exports: [ButtonModule],
})
export class ButtonsModule {}
