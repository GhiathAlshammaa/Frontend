import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Actor, Staff } from '../models';
import { HandleError, UrlGenerator } from '../utils';
import { ExtractDataCredits } from '../utils/data';

@Injectable({
  providedIn: 'root',
})
export class StaffService implements OnInit {
  // Url Params initialization
  language = 'en-US';
  restUrlValue = `&language=${this.language}`;
  urlStaff = '';
  urlActor = '';

  actorById$ = (actorId: number): Observable<Actor> => {
    this.urlActor = UrlGenerator(
      'normal',
      'person',
      actorId,
      this.restUrlValue
    );
    // console.log(`urlActor: ${this.urlActor}`);
    return this.http.get<Actor>(this.urlActor).pipe(
      tap((actor) => console.log(actor)),
      catchError(HandleError)
    );
  };

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
  ngOnInit(): void {}
}
