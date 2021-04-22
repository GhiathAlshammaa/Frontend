import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-list',
  template: ` <p>movie-list works!</p> `,
  styles: [],
})
export class MovieListComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const pageTitle = this.route.snapshot.data['pageTitle'];
    console.log(`pageTitle: ${pageTitle}`);
  }
}
