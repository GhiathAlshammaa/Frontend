import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <!-- Header -->
    <app-header [projectTitle]="title"></app-header>

    <!--The content below is only a placeholder and can be replaced.-->
    <div style="text-align:center" class="content mt-5">
      <h1>Welcome in {{ title }}</h1>
      <!-- <span style="display: block">{{ title }} app is running!</span> -->
      <img
        width="300"
        alt="Netflix Logo"
        src="../assets/logo.png"
        class="mt-4"
      />
    </div>

    <!-- Footer -->
    <app-footer></app-footer>
  `,
  styles: [],
})
export class AppComponent {
  title = 'Netflix';
}
