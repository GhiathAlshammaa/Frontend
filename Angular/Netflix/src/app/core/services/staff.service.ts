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
  urlStaff = '';

  // Variable contains a required Credits
  staff$ = (movieId: number): Observable<Staff[]> => {
    this.urlStaff = UrlGenerator(
      'normal',
      'movie/' + movieId,
      'credits',
      this.restUrlValue
    );

    return this.http.get<Staff[]>(this.urlStaff).pipe(
      map((credits) => ExtractDataCredits(credits)),
      // tap((staff)=> console.log(staff)),
      catchError(HandleError)
    );
  };

  constructor(private http: HttpClient) {}
}
