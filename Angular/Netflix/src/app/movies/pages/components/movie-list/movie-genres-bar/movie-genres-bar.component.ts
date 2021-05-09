import { Component, OnInit } from '@angular/core';
import { MoviesService } from '@app/core/services';
import { EMPTY } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-movie-genres-bar',
  templateUrl: 'movie-genres-bar.component.html',
  styleUrls: ['movie-genres-bar.component.scss'],
})
export class MovieGenresBarComponent implements OnInit {
  genres$ = this.moviesService.genres$.pipe(
    catchError((err) => {
      this.errorMsg = err;
      return EMPTY;
    })
  );
  errorMsg = '';
  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {

  }
}
