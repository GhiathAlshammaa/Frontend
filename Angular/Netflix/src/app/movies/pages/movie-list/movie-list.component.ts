import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '@app/core/services';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-movie-list',
  template: ` <p>movie-list works!</p> `,
  styles: [],
})
export class MovieListComponent implements OnInit {
  movies = [];
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
      next: (products) => {
        this.movies = products;
      },
      error: (err) => (this.errorMessage = err),
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
