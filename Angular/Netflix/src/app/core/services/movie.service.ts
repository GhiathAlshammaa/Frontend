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

  // Variable contains a required Movie
  movie$ = (movieId: number): Observable<Movie> => {
    this.urlMovie = UrlGenerator('normal', 'movie', movieId, this.restUrlValue);
    return this.http.get<Movie>(this.urlMovie).pipe(catchError(HandleError));
  };

  constructor(private http: HttpClient) {}
}
