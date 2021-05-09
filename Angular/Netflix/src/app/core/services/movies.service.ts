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
import { MovieService } from './movie.service';
import { Observable } from 'rxjs';
import { Genres } from '../models';
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

  // test temporary property
  movieId = 0;

  // ## Generating Url
  urlUpComing = UrlGenerator('normal', 'movie', 'upcoming', this.restUrlValue);
  urlCountries = UrlGenerator('config', '', 'countries');
  urlGenres = UrlGenerator('normal', 'genre', 'movie/list');
  // because of Id, this Url should to generate in MovieDetails

  constructor(private http: HttpClient) {
    // Url Test Section
    // console.log(`urlUpComing: ${this.urlUpComing}`);
    // console.log(`urlCountries: ${this.urlCountries}`);
    // console.log(`urlGenres: ${this.urlGenres}`);
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

  genres$ = this.http.get<Genres>(this.urlGenres).pipe(
    map((genres) => genres.genres),
    // tap((genres) => console.log(genres))
    catchError(HandleError)
  );

  ngOnInit() {}
}
