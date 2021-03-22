import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { SharedComponent } from './shared.component';
// import { ButtonsModule } from '@ui/lib/buttons';
// import { ButtonsModule } from './dist/ui-custom-elements';
import { ReactiveFormsModule } from '@angular/forms';
// import { GuiModule } from 'gui';
// import { GuiModule } from 'gui';
// import { ButtonsModule } from '@projects/../dist/ui-custom-elements/lib/buttons';
// import { UiCustomElementsModule } from 'ui-custom-elements';
import { HelloWorldModule } from '@ihosam/hello-world';

@NgModule({
  declarations: [SharedComponent],
  imports: [
    CommonModule,
    SharedRoutingModule,
    ReactiveFormsModule,
    HelloWorldModule,

    // GuiModule,
    // ButtonsModule
    // UiCustomElementsModule,
  ],
})
export class SharedModule {}
