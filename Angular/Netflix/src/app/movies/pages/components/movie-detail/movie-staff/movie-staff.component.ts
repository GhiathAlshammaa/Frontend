import { Component, Input, OnInit } from '@angular/core';
import { Credit, Staff } from '@app/core/models/staff';
import { StaffService } from '@app/core/services';
import { HandleError } from '@app/core/utils';
import { EMPTY, Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-movie-staff',
  templateUrl: 'movie-staff.component.html',
  styleUrls: ['movie-staff.component.scss'],
})
export class MovieStaffComponent implements OnInit {
  @Input() movieId: number;
  errorMessage = '';
  staff$: Observable<Staff[]>;

  constructor(private staffService: StaffService) {}

  ngOnInit(): void {
    // console.log(`MovieId: ${this.movieId}`);
    this.staff$ = this.staffService.credits$(this.movieId).pipe(
      tap((data) => console.log(data)),
      catchError((err) => {
        this.errorMessage = err;
        return EMPTY;
      })
    );
    // Test Section
    // this.staff$.subscribe({
    //   next(data) {
    //     // console.log(`Credits: ${JSON.stringify(data)}`);
    //   },
    // });
  }
}
