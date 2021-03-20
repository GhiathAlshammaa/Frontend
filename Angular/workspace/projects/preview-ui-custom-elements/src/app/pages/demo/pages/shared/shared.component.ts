import { Component, HostBinding, OnInit } from '@angular/core';
import Color from '@preview/styles/colors';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-shared',
  templateUrl: './shared.component.html',
  styleUrls: ['./shared.component.scss'],
})
export class SharedComponent implements OnInit {
  form: FormGroup;
  isInLine: boolean;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      input: [
        null,
        {
          updateOn: 'blur',
          validators: [
            Validators.required,
            Validators.minLength(3),
            // Validators.pattern(regex.numbers)
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
