import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from '../models/movie';
import { catchError, tap, map } from 'rxjs/operators';
import { ExtractData, HandleError, UrlGenerator } from '../utils';
import { YearOfDate } from '../utils/date';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  // Url Params initialization
  language = 'en-US';
  restUrlValue = `&language=${this.language}`;
  urlMovie = '';
  urlMovieSimilar = '';
  // Variable contains a required Movie
  movie$ = (movieId: number): Observable<Movie> => {
    this.urlMovie = UrlGenerator('normal', 'movie', movieId, this.restUrlValue);

    return this.http.get<Movie>(this.urlMovie).pipe(
      // tap((data) => console.log(data)),
      catchError(HandleError)
    );
  };

  movieSimilar$ = (movieId: number): Observable<Movie[]> => {
    this.urlMovieSimilar = UrlGenerator(
      'normal',
      'movie/' + movieId,
      'similar'
    );
    // console.log(`urlMovieSimilar: ${this.urlMovieSimilar}`);

    return this.http.get<Movie[]>(this.urlMovieSimilar).pipe(
      map((data) => ExtractData(data)),
      map((movies) =>
        movies.map(
          (movie) =>
            ({
              ...movie,
              releaseYear: YearOfDate(movie.release_date),
            } as Movie)
        )
      ),
      catchError(HandleError)
    );
  };

  constructor(private http: HttpClient) {}
}
