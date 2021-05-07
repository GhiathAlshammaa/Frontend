import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '@app/core/models/movie';
import { LangFlag } from '@app/core/utils';

@Component({
  selector: 'app-movie-external-info',
  templateUrl: 'movie-external-info.component.html',
  styles: ['img {width: 100%;}'],
})
export class MovieExternalInfoComponent implements OnInit {
  @Input() movie: Movie;
  langFlag;
  constructor() {}

  updateCountryToLowerCase() {
    return this.movie.production_countries.map((country) => {
      country.iso_3166_1 = country.iso_3166_1.toLocaleLowerCase();
    });
  }

  ngOnInit(): void {
    this.updateCountryToLowerCase();
    this.langFlag = LangFlag(this.movie.original_language);
  }
}
