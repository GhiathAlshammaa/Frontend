import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '@app/core/models/movie';

@Component({
  selector: 'app-movie',
  templateUrl: 'movie.component.html',
  styleUrls: ['movie.component.scss'],
})
export class MovieComponent implements OnInit {
  @Input() movie: Movie;
  @Input() title = 'test';

  constructor() {}

  ngOnInit(): void {}
}
