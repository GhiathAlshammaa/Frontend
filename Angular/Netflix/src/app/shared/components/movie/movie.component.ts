import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Country } from '@app/core/models/country';
import { Movie } from '@app/core/models/movie';
import { MoviesService } from '@app/core/services';
import { YearOfDate } from '@app/core/utils';

@Component({
  selector: 'app-movie',
  templateUrl: 'movie.component.html',
  styleUrls: ['movie.component.scss'],
})
export class MovieComponent implements OnInit {
  @Input() movie: Movie;
  @Input() releaseYear: boolean;
  releaseYearValue;

  // this Property to switch between the router, inside MovieDetail
  pageTitle = this.route.snapshot.data['pageTitle'] === 'Movie' ? 1 : 0;

  constructor(
    private moviesService: MoviesService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.releaseYearValue = this.releaseYear
      ? YearOfDate(this.movie?.release_date)
      : null;

  }
}
