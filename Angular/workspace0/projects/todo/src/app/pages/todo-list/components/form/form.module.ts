import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import {
    InputModule, FormFieldModule
} from '@todo-app/shared/controls';
import { ButtonModule } from '@todo-app/shared/buttons';

import { FormComponent } from './form.component';


@NgModule({
    declarations: [FormComponent],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        InputModule,
        FormFieldModule,
        ButtonModule
    ]
})
export class FormModule { }
