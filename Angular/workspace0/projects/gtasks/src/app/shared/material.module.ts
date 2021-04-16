import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  declarations: [],
  imports: [MatToolbarModule, MatIconModule],
  exports: [MatToolbarModule, MatIconModule],
})
export class MaterialModule {}
