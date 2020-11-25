import { Component, OnInit } from '@angular/core';

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
  ngOnInit(): void {}

  onClickSingUp() {
    this.formMode = !this.formMode;
    console.log(this.formMode);
  }

  onClickSingIn() {
    this.formMode = !this.formMode;
    console.log(this.formMode);
  }
}
