import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <footer class="mt-auto bg-light text-center text-lg-start">
      <!-- Copyright -->
      <div
        class="text-center p-3"
        style="background-color: rgba(0, 0, 0, 0.2);"
      >
        © 2021 Copyright:
        <a class="text-dark" href="https://Ghiath.net/" target="_blank"
          >Ghiath</a
        >
      </div>
      <!-- Copyright -->
    </footer>
  `,
  styles: ['footer { position: absolute; bottom: 0;width:100%; }'],
})
export class FooterComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
