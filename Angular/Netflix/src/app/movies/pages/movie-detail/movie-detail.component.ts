import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '@app/core/models/movie';
import { MovieService, MoviesService } from '@app/core/services';
import { StreamingService } from '@app/core/services/streaming.service';
import { UrlGenerator } from '@app/core/utils';
import { EMPTY, Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-movie-detail',
  templateUrl: 'movie-detail.component.html',
  styleUrls: ['movie-detail.component.scss'],
})
export class MovieDetailComponent implements OnInit {
  errorMessage = '';
  movie$: Observable<Movie>;
  movieSimilar$: Observable<Movie[]>;
  streaming$;
  id = 0;

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService,
    private streamingService: StreamingService
  ) {
    this.id = +this.route.snapshot.paramMap.get('id');
  }
  async ngOnInit() {
    this.movie$ = this.movieService.movie$(this.id).pipe(
      // tap((data) => console.log(data)),
      catchError((err) => {
        this.errorMessage = err;
        return EMPTY;
      })
    );

    await this.streamingService.getUserCountry();

    this.streaming$ = this.streamingService
      .streamingByMovieId$(501929, this.streamingService.countryCode)
      .pipe(
        catchError((err) => {
          this.errorMessage = err;
          return EMPTY;
        })
      );
    this.streaming$.subscribe();
  }
}
