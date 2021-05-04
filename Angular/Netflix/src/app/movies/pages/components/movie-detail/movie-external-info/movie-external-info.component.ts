import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '@app/core/models/movie';

@Component({
  selector: 'app-movie-external-info',
  templateUrl: 'movie-external-info.component.html',
  styles: ['img {width: 100%;}'],
})
export class MovieExternalInfoComponent implements OnInit {
  @Input() movie: Movie;
  constructor() {}

  ngOnInit(): void {}
}
