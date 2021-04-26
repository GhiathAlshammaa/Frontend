import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@src/environments/environment';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { Movie } from '../models/movie';
import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';
import { ExtractData, HandleError } from '../utils';
@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  url = '';
  language = '';

  constructor(private http: HttpClient) {
    this.language = 'en-US';
    this.url = `${environment.apiConfig.url}api_key=${environment.apiConfig.apikey}&language=${this.language}&page=1`;
    // console.log(`url: ${this.url}`);
  }

  getUpComingMovies(): Observable<Movie[]> {
    return this.http.get<any[]>(this.url).pipe(
      map((data) => ExtractData(data)),
      catchError(HandleError)
    );
  }
}
