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
  // Url Properties for Url Generator
  language = '';
  pageNum;
  restUrlValue = '';
  today;
  urlCountries = '';
  urlUpComing = '';
  countries: Country[] = [];

  // Array contains all the Movies in "UpComing" Section
  movies$ = this.http.get<Movie[]>(this.urlUpComing).pipe(
    map((data) => ExtractData(data)),
    map((movies) =>
      movies.map(
        (movie) =>
          ({
            ...movie,
            sinceHowManyDays: SubtractDates(movie.release_date),
            production_countries: this.countries,
          } as Movie)
      )
    ),
    tap((movies) => console.log(movies)),
    catchError(HandleError)
  );

  countries$ = this.http.get<Country[]>(this.urlCountries).pipe(
    tap((country) => console.log(country)),
    catchError(HandleError)
  );

  constructor(private http: HttpClient) {
    // Url Params initialization
    this.language = 'en-US';
    this.pageNum = 1;
    this.restUrlValue = `&language=${this.language}&page=${this.pageNum}`;

    // Generating Url
    this.urlCountries = UrlGenerator('config', 'countries');
    this.urlUpComing = UrlGenerator('normal', 'upcoming', this.restUrlValue);

    // Bringing a today date, in order to know since when the Movie released
    this.today = moment.now();

    // Test Section
    // console.log(`urlUpComing: ${this.urlUpComing}`);
    // console.log(`urlCountries: ${this.urlCountries}`);
  }

  ngOnInit() {}
}
