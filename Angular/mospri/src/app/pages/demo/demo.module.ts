import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemoRoutingModule } from './demo-routing.module';
import { DemoComponent } from './demo.component';
import { SharedModule } from './pages/shared/shared.module';

@NgModule({
  declarations: [DemoComponent],
  imports: [CommonModule, DemoRoutingModule, SharedModule],
  exports: [SharedModule],
})
export class DemoModule {}
