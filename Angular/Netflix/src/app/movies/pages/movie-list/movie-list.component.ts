import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '@app/core/services';
import { EMPTY } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-movie-list',
  templateUrl: 'movie-list.component.html',
  styleUrls: ['movie-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MovieListComponent {
  movies$ = this.moviesService.movies$.pipe(
    catchError((err) => {
      this.errorMessage = err;
      return EMPTY;
    })
  );
  errorMessage = '';

  constructor(
    private route: ActivatedRoute,
    private moviesService: MoviesService
  ) {
    // const today = new Date();
    // const movieDate = new Date('2021-04-01');
    // const Time = today.getTime() - movieDate.getTime();
    // const Days = Math.round(Time / (1000 * 3600 * 24));
    // console.log(today);
    // console.log(movieDate);
    // console.log(`Result: ${Days}`);
  }
}
