import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { SharedComponent } from './shared.component';
import { ButtonsModule } from '@ui/lib/buttons';
import { ReactiveFormsModule } from '@angular/forms';
import { ControlsModule } from '@ui/lib/controls';

@NgModule({
  declarations: [SharedComponent],
  imports: [CommonModule, SharedRoutingModule, ButtonsModule, ControlsModule, ReactiveFormsModule],
})
export class SharedModule {}
