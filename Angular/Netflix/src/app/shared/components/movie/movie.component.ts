import { Component, Input, OnInit } from '@angular/core';
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
  constructor(private moviesService: MoviesService) {}
  updateCountryValue() {
    return this.movie.production_countries.map((country) => {
      country.iso_3166_1 = country.iso_3166_1.toLocaleLowerCase();
    });
  }
  ngOnInit(): void {
    this.releaseYearValue = this.releaseYear
      ? YearOfDate(this.movie?.release_date)
      : null;
    // this.updateCountryValue();
    // console.log(this.movie);
  }
}
