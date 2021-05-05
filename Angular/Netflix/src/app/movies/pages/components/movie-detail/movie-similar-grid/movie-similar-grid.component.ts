import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '@app/core/models';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-movie-similar-grid',
  templateUrl: 'movie-similar-grid.component.html',
  styleUrls: ['movie-similar-grid.component.scss'],
})
export class MovieSimilarGridComponent implements OnInit {
  @Input() movieId: number;
  errorMessage = '';
  similarMovie$: Observable<Movie[]>;

  constructor() {}

  ngOnInit(): void {
    console.log(`movieSimilarComponent: ${this.movieId}`);
  }
}
