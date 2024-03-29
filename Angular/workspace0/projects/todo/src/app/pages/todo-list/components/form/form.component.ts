import { Inject, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { Store } from '@ngrx/store';
// import * as fromRoot from '@app/store';
import * as fromRoot from "../../store";

import * as fromList from '../../store/list';

import { regex, regexErrors, markFormGroupTouched } from '@todo-app/shared/utils';

import { Task } from '../../store/list';


@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

    form: FormGroup;
    regexErrors = regexErrors;

    constructor(
        private fb: FormBuilder,
        private store: Store<fromRoot.TasksState>,
        private dialogRef: MatDialogRef<FormComponent>,
        @Inject(MAT_DIALOG_DATA) public data: { value: Task }
    ) { }

    ngOnInit(): void {

        this.form = this.fb.group({
            title: [null, {
                updateOn: 'blur', validators: [
                    Validators.required,
                    Validators.maxLength(128),
                    Validators.pattern(regex.safe)
                ]
            }],
            description: [null, {
                updateOn: 'blur', validators: [
                    Validators.required,
                    Validators.maxLength(128),
                    Validators.pattern(regex.safe)
                ]
            }]
        });

        if (this.data.value) {
            this.form.patchValue(this.data.value);
        }
    }

    onSubmit(): void {

        if (this.form.valid) {

            if (this.data.value) {
                const updateJob = { ...this.data.value, ...this.form.value };
                this.store.dispatch(new fromList.Update(updateJob));
            } else {
                this.store.dispatch(new fromList.Create(this.form.value));
            }

            this.dialogRef.close();

        } else {
            markFormGroupTouched(this.form);
        }
    }

}
