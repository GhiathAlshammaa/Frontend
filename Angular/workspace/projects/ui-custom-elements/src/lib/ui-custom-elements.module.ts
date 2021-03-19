import { NgModule } from '@angular/core';
import { UiCustomElementsComponent } from './ui-custom-elements.component';
import { ButtonComponent } from './buttons/button/button.component';

@NgModule({
  declarations: [UiCustomElementsComponent, ButtonComponent],
  imports: [],
  exports: [UiCustomElementsComponent, ButtonComponent],
})
export class UiCustomElementsModule {}
