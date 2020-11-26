import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { User } from './model/user';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'template-driven';
  formMode = true;
  signInForm = 'container';
  signUpForm = 'container sign-up-mode';

  orginalUser: User = {
    username: '',
    email: '',
    password: '',
    password_confirmation: '',
  };

  user: User = { ...this.orginalUser };
  ngOnInit(): void {}

  onClickHandler(): void {
    this.formMode = !this.formMode;
  }

  onSubmitHandler(form: NgForm): void {
    console.log('form: ', form.value);
  }

  onBlurHandler(field: NgModel) {
    console.log(`${field.name}: ${field.valid}`);
  }
}
