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

  // getCountries = (movieId: number) => {
  //   this.moviesService.getProductionCountriesByMovieId(movieId).subscribe({
  //     next(countries) {
  //       this.countries = countries;
  //     },
  //     error(err) {
  //       this.errorMessage = err;
  //       return EMPTY;
  //     },
  //   });
  //   console.log(this.countries);
  // };

  movies$ = this.moviesService.movies$.pipe(
    catchError((err) => {
      this.errorMessage = err;
      return EMPTY;
    })
  );
  // moviesWithCountries$ = this.moviesService.movieWithCountries$.pipe(
  //   catchError((err) => {
  //     this.errorMessage = err;
  //     return EMPTY;
  //   })
  // );

  constructor(
    private route: ActivatedRoute,
    private moviesService: MoviesService
  ) {}

  ngOnInit() {
    this.movies$.subscribe({
      // this.movies$.subscribe({
      next(movies) {
        movies.map((movie) => {
          // console.log(movie.production_countries);
        });
      },
    });
  }
}
