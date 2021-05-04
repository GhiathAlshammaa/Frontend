import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '@app/core/models/movie';
import { MoviesService } from '@app/core/services';

@Component({
  selector: 'app-movie-detail',
  template: ` <p>movie-detail works!</p> `,
  styles: [],
})
export class MovieDetailComponent implements OnInit {
  movie: Movie;
  constructor(
    private route: ActivatedRoute,
    private moviesService: MoviesService
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    console.log(`id: ${id}`);
    this.moviesService.getMovieById(id).subscribe({
      next(movie) {
        this.movie = movie;
        // console.log(`MovieDetials: ${JSON.stringify(this.movie)}`);
      },
    });
  }
}
