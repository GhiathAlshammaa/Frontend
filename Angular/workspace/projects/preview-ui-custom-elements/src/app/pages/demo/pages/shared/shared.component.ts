import { Component, HostBinding, OnInit } from '@angular/core';
import Color from '@preview/styles/colors';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { regex, regexErrors } from '@ui/lib/utils';

@Component({
  selector: 'app-shared',
  templateUrl: './shared.component.html',
  styleUrls: ['./shared.component.scss'],
})
export class SharedComponent implements OnInit {
  form: FormGroup;
  isInLine: boolean;
  regexErrors = regexErrors;

  constructor(private fb: FormBuilder) {
    this.isInLine = true;
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      input: [
        null,
        {
          updateOn: 'blur',
          validators: [
            Validators.required,
            Validators.minLength(3),
            Validators.pattern(regex.email),
          ],
        },
      ],
    });
  }

  onSubmit(): void {
    console.log('Submit!');
  }
  onPatchValue(): void {
    this.form.patchValue({ input: 'test' });
  }
  onToggleInLine(): void {
    this.isInLine = !this.isInLine;
  }
}
