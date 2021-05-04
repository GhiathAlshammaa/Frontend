import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@src/environments/environment';
import { catchError, filter, map, tap } from 'rxjs/operators';
import { Movie } from '../models/movie';
import { ExtractData, HandleError, SubtractDates } from '../utils';
import * as moment from 'moment';
import { combineLatest, forkJoin, Observable } from 'rxjs';
import { Country } from '../models/country';
@Injectable({
  providedIn: 'root',
})
export class MoviesService implements OnInit {
  language = 'en-US';
  today = moment.now();
  urlUpcoming = `${environment.apiConfig.url}upcoming?api_key=${environment.apiConfig.apikey}&language=${this.language}&page=1`;
  urlCountries = `${environment.apiConfig.urlConfig}countries?api_key=${environment.apiConfig.apikey}`;
  countries: Country[] = [];

  movies$ = this.http.get<Movie[]>(this.urlUpcoming).pipe(
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

  getMovieById(movieId: number): Observable<Movie> {
    const urlMovieById = `${environment.apiConfig.url}${movieId}?api_key=${environment.apiConfig.apikey}&language=${this.language}`;
    return this.http.get<Movie>(urlMovieById).pipe(
      // tap((movies) => console.log(movies)),
      catchError(HandleError)
    );
  }

  // getProductionCountriesByMovieId(movieId: number): void {
  //   console.log(`movieId: ${movieId}`);
  // return this.getMovieById(movieId).pipe(
  //   map((movie) => {
  //     this.countries = movie.production_countries;
  //     // console.log(`movie: ${movie}`);
  //     return movie.production_countries;
  //   })
  // );
  // }

  countries$ = this.http.get<Country[]>(this.urlCountries).pipe(
    tap((country) => console.log(country)),
    catchError(HandleError)
  );

  constructor(private http: HttpClient) {}

  ngOnInit() {}
}
