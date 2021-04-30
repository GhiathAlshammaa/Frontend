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
  // orgenalCountries: Country[] = [
  //   {
  //     iso_3166_1: '',
  //     name: '',
  //   },
  // ];

  movies$ = this.http.get<Movie[]>(this.urlUpcoming).pipe(
    map((data) => ExtractData(data)),
    map((movies) =>
      movies.map((movie) => {
        this.getProductionCountriesByMovieId(movie.id).subscribe({
          next(countries) {
            this.countries?.push(...countries);
            // console.log(this.countries);
          },
          complete() {
            // console.log('done');
          },
        });
        return {
          ...movie,
          sinceHowManyDays: SubtractDates(movie.release_date),
          production_countries: this.countries,
        } as Movie;
      })
    ),
    // tap((movies) =>
    //   movies.map((movie) => console.log(movie.production_countries))
    // ),
    catchError(HandleError)
  );

  countries$ = this.http.get<Country[]>(this.urlCountries).pipe(
    tap((country) => console.log(country)),
    catchError(HandleError)
  );

  getMovieById(movieId: number): Observable<Movie> {
    const urlMovieById = `${environment.apiConfig.url}${movieId}?api_key=${environment.apiConfig.apikey}&language=${this.language}`;
    return this.http.get<Movie>(urlMovieById);
  }

  getProductionCountriesByMovieId(movieId: number): Observable<Country[]> {
    return this.getMovieById(movieId).pipe(
      map((movie) => {
        this.countries = movie.production_countries;
        return movie.production_countries;
      })
    );
  }

  constructor(private http: HttpClient) {}

  ngOnInit() {}
}
