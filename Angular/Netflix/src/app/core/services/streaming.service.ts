import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, filter, map, tap } from 'rxjs/operators';
import { CountryCode, Streaming, StreamingStatus } from '../models/streaming';
import { ExtractData, HandleError, UrlGenerator } from '../utils';
import { CurrentCountryCode } from '../utils/country';

@Injectable({
  providedIn: 'root',
})
export class StreamingService implements OnInit {
  streamingUrl = UrlGenerator('normal', 'watch/providers', 'movie');
  // https://api.themoviedb.org/3/movie/501929/watch/providers
  streamingByMovieIdUrl = '';

  streaming$ = this.http.get<Streaming[]>(this.streamingUrl).pipe(
    map((streamings) => ExtractData(streamings)),
    map((streamingArray) =>
      // streamingArray.filter((x: Streaming) => console.log(x.provider_name))
      streamingArray.filter(
        (x: Streaming) =>
          x.provider_id === 390 ||
          x.provider_id === 119 ||
          x.provider_id === 350 ||
          x.provider_id === 8 ||
          x.provider_id === 15
        // 390  =>  Disney Plus
        // 119  =>  Amazon Prime Video
        // 350  =>  Apple TV Plus
        // 8    =>  Netflix
        // 15   =>  Hulu
      )
    ),
    // tap((streamings) => console.log(streamings)),
    catchError(HandleError)
  );

  streamingByMovieId$ = (
    movieId: number,
    countryCode: string
  ): Observable<any> => {
    this.streamingByMovieIdUrl = UrlGenerator(
      'normal',
      'movie/' + movieId,
      'watch/providers'
    );
    return this.http.get<StreamingStatus>(this.streamingByMovieIdUrl).pipe(
      // tap((streamings) => console.log(streamings)),
      map((streamings) => ExtractData(streamings, countryCode)),
      tap((streamings) => console.log(streamings)),
      // tap((streamings) => console.log(Object.keys(streamings))),
      catchError(HandleError)
    );
  };

  constructor(private http: HttpClient) {
    // this.streaming$.subscribe();
  }

  ngOnInit(): void {}
}
