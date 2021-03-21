import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormRoutingModule } from './form-routing.module';
import { FormComponent } from './form.component';
import { StepperModule } from './components';
import { ProfessionalComponent } from './components/professional/professional.component';
import { PersonalComponent } from './components/personal/personal.component';


@NgModule({
  declarations: [FormComponent, ProfessionalComponent, PersonalComponent],
  imports: [
    CommonModule,
    FormRoutingModule,
    StepperModule
  ]
})
export class FormModule { }
