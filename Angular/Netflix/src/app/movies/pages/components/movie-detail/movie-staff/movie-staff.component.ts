import { Component, Input, OnInit } from '@angular/core';
import { Staff } from '@app/core/models/staff';
import { StaffService } from '@app/core/services';
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
  noPhotoSrc = '../../../../../../assets/noPhoto.jpg';
  imgPath = 'https://image.tmdb.org/t/p/w500/';

  constructor(private staffService: StaffService) {}

  ngOnInit(): void {
    this.staff$ = this.staffService.credits$(this.movieId).pipe(
      // tap((data) => console.log(data)),
      catchError((err) => {
        this.errorMessage = err;
        return EMPTY;
      })
    );
  }
}
