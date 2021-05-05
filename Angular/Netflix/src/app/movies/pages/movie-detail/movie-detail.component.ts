import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '@app/core/models/movie';
import { MovieService } from '@app/core/services';
import { EMPTY, Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Component({
  selector: 'app-movie-detail',
  templateUrl: 'movie-detail.component.html',
  styleUrls: ['movie-detail.component.scss'],
})
export class MovieDetailComponent implements OnInit {
  errorMessage = '';
  movie$: Observable<Movie>;

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService
  ) {}
  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    // console.log(`id: ${id}`);

    this.movie$ = this.movieService.movie$(id).pipe(
      catchError((err) => {
        this.errorMessage = err;
        return EMPTY;
      })
    );
    // Test Section
    this.movie$.subscribe({
      next(data) {
        // console.log(data);
      },
    });
  }
}
