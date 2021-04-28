import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@src/environments/environment';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Movie } from '../models/movie';
import { ExtractData, HandleError, SubtractDates } from '../utils';
import * as moment from 'moment';
@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  language = 'en-US';
  today = moment.now();
  url = `${environment.apiConfig.url}api_key=${environment.apiConfig.apikey}&language=${this.language}&page=1`;
  movies$ = this.http.get<Movie[]>(this.url).pipe(
    map((data) => ExtractData(data)),
    map((movies) =>
      movies.map(
        (movie) =>
          ({
            ...movie,
            sinceHowManyDays: SubtractDates(movie.release_date),
          } as Movie)
      )
    ),
    tap((data) => console.log(data)),

    catchError(HandleError)
  );

  constructor(private http: HttpClient) {
    // Initialize the lang
    // this.language = 'en-US';
    // Check the Path
    // console.log(`Url: ${this.url}`);
  }
}
