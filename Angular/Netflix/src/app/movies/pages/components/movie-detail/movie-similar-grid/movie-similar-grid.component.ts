import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-similar-grid',
  templateUrl: 'movie-similar-grid.component.html',
  styleUrls: ['movie-similar-grid.component.scss'],
})
export class MovieSimilarGridComponent implements OnInit {
  @Input() movieId: number;
  constructor() {}

  ngOnInit(): void {
    console.log(`movieSimilarComponent: ${this.movieId}`);
  }
}
