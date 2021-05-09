import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
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
export class MovieListComponent implements OnInit{
  moviesGenreById$;
  genreId = 99;
  errorMessage = '';

  // moviesUpcoming$ = this.moviesService.moviesUpcoming$.pipe(
  //   catchError((err) => {
  //     this.errorMessage = err;
  //     return EMPTY;
  //   })
  // );

  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {}
}
