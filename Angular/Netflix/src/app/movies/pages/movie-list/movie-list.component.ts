import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
export class MovieListComponent implements OnInit {
  errorMessage = '';
  countries: Country[] = [];

  movies$ = this.moviesService.movies$.pipe(
    catchError((err) => {
      this.errorMessage = err;
      return EMPTY;
    })
  );

  constructor(
    private route: ActivatedRoute,
    private moviesService: MoviesService
  ) {}

  ngOnInit() {
    this.moviesService.getMovieById(460465).subscribe({
      next(movie) {
        console.log(movie);
      },
    });
  }
}
