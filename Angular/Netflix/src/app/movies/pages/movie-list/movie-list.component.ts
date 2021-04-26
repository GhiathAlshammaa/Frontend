import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '@app/core/models/movie';
import { MoviesService } from '@app/core/services';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-movie-list',
  templateUrl: 'movie-list.component.html',
  styleUrls: ['movie-list.component.scss'],
})
export class MovieListComponent implements OnInit {
  movies: Movie[] = [];
  errorMessage = '';
  sub!: Subscription;

  constructor(
    private route: ActivatedRoute,
    private moviesService: MoviesService
  ) {}

  ngOnInit(): void {
    const pageTitle = this.route.snapshot.data['pageTitle'];
    console.log(`pageTitle: ${pageTitle}`);

    this.sub = this.moviesService.getUpComingMovies().subscribe({
      next: (movies) => {
        this.movies.push(...movies);
        // console.log(this.movies[0]);
      },
      error: (err) => (this.errorMessage = err),
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
