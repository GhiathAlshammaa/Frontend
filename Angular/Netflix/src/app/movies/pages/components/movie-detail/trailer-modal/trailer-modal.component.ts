import { Component, OnInit, Input } from '@angular/core';
import { Movie, Video } from '@app/core/models';
import { MovieService } from '@app/core/services';
import { EMPTY, Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Component({
  selector: 'app-trailer-modal',
  templateUrl: 'trailer-modal.component.html',
  styleUrls: ['trailer-modal.component.scss'],
})
export class TrailerModalComponent implements OnInit {
  @Input() movie: Movie;
  movieVideo$: Observable<Video>;
  errorMessage = '';
  video: Video = undefined;
  videoPathSrc;

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.movieVideo$ = this.movieService.movieVideo$(this.movie.id).pipe(
      tap((video) => {
        this.video = video[0];
        this.videoPathSrc = this.video
          ? `https://www.youtube.com/embed/${this.video?.key}`
          : null;
      }),
      catchError((err) => {
        this.errorMessage = err;
        return EMPTY;
      })
    );
    this.movieVideo$.subscribe();
  }
}
