import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Country } from '@app/core/models/country';
import { Movie } from '@app/core/models/movie';
import { MoviesService } from '@app/core/services';
import { EMPTY, Observable, pipe } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Component({
  selector: 'app-movie-list',
  templateUrl: 'movie-list.component.html',
  styleUrls: ['movie-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MovieListComponent {
  errorMessage = '';

  movies$ = this.moviesService.movies$.pipe(
    catchError((err) => {
      this.errorMessage = err;
      console.log(`Error: ${this.errorMessage}`);
      return EMPTY;
    })
  );

  constructor(private moviesService: MoviesService) {}
}
