import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from '../models/movie';
import { catchError, tap, map } from 'rxjs/operators';
import { HandleError, UrlGenerator } from '../utils';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  // Url Params initialization
  language = 'en-US';
  restUrlValue = `&language=${this.language}`;
  urlMovie = '';

  // Var contains a required Movie
  movie$ = (movieId: number): Observable<Movie> => {
    this.urlMovie = UrlGenerator('normal', movieId, this.restUrlValue);
    return this.http.get<Movie>(this.urlMovie).pipe(catchError(HandleError));
  };

  constructor(private http: HttpClient) {}

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
}
