import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MoviesService } from '@app/core/services';
import { EMPTY } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-movie-genres-bar',
  templateUrl: 'movie-genres-bar.component.html',
  styleUrls: ['movie-genres-bar.component.scss'],
})
export class MovieGenresBarComponent implements OnInit {
  genres$ = this.moviesService.genres$.pipe(
    catchError((err) => {
      this.errorMsg = err;
      return EMPTY;
    })
  );
  moviesGenreById$;
  genreId = 99;
  pageTitle = this.route.snapshot.data['pageTitle'] === 'g' ? 1 : 0;

  errorMsg = '';
  constructor(
    private moviesService: MoviesService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    // this is for routerLink on same component when only queryParameter changes
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };
  }

  ngOnInit(): void {
    this.genreId = +this.route.snapshot.paramMap.get(':id');
    console.log(`genreId: ${this.genreId}`);

    // GenreId always appear 0 !!!

    // this.moviesGenreById$ = this.moviesService
    //   .moviesGenreById$(this.genreId)
    //   .pipe(
    //     catchError((err) => {
    //       this.errorMsg = err;
    //       return EMPTY;
    //     })
    //   );
  }
}
