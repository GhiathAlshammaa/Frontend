import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Staff } from '../models';
import { HandleError, UrlGenerator } from '../utils';
import { ExtractDataCredits } from '../utils/data';

@Injectable({
  providedIn: 'root',
})
export class StaffService {
  // Url Params initialization
  language = 'en-US';
  restUrlValue = `&language=${this.language}`;
  urlCredits = '';

  // Variable contains a required Credits
  credits$ = (movieId: number): Observable<Staff[]> => {
    this.urlCredits = UrlGenerator(
      'normal',
      'movie/' + movieId,
      'credits',
      this.restUrlValue
    );

    return this.http.get<Staff[]>(this.urlCredits).pipe(
      map((credits) => ExtractDataCredits(credits)),
      // tap((staff)=> console.log(staff)),
      catchError(HandleError)
    );
  };

  constructor(private http: HttpClient) {}
}
