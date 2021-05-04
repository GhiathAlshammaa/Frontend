import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Movie } from '../models/movie';
import {
  ExtractData,
  HandleError,
  SubtractDates,
  UrlGenerator,
} from '../utils';
import * as moment from 'moment';
import { Country } from '../models/country';
@Injectable({
  providedIn: 'root',
})
export class MoviesService implements OnInit {
  // Url Params initialization
  language = 'en-US';
  pageNum = 1;
  restUrlValue = `&language=${this.language}&page=${this.pageNum}`;

  // Bringing a today date, in order to know since when the Movie released
  today = moment.now();

  // Generating Url
  urlUpComing = UrlGenerator('normal', 'upcoming', this.restUrlValue);
  urlCountries = UrlGenerator('config', 'countries');
  // countries: Country[] = [];

  constructor(private http: HttpClient) {
    // Test Section
    // console.log(`urlUpComing: ${this.urlUpComing}`);
    // console.log(`urlCountries: ${this.urlCountries}`);
  }

  // Array contains all the Movies in "UpComing" Section
  movies$ = this.http.get<Movie[]>(this.urlUpComing).pipe(
    map((data) => ExtractData(data)),
    map((movies) =>
      movies.map(
        (movie) =>
          ({
            ...movie,
            sinceHowManyDays: SubtractDates(movie.release_date),
            // production_countries: this.countries,
          } as Movie)
      )
    ),
    // tap((movies) => console.log(movies)),
    catchError(HandleError)
  );

  ngOnInit() {}

  // countries$ = this.http.get<Country[]>(this.urlCountries).pipe(
  //   tap((country) => console.log(country)),
  //   catchError(HandleError)
  // );
}
