import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">{{ projectTitle }}</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <a class="nav-link active" aria-current="page" href="#home">Home</a>
            <a class="nav-link" aria-current="page" href="#upcoming"
              >Upcoming Movies
            </a>
            <a class="nav-link" href="#popularSeries">Popular Series</a>
          </div>
        </div>
      </div>
    </nav>
  `,
  styles: [],
})
export class HeaderComponent implements OnInit {
  constructor() {}
  @Input() projectTitle = '';

  ngOnInit(): void {}
}
