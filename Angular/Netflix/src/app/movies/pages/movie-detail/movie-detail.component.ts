import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-detail',
  template: ` <p>movie-detail works!</p> `,
  styles: [],
})
export class MovieDetailComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    console.log(`id: ${id}`);
    const pageTitle = this.route.snapshot.data['pageTitle'];
    console.log(`pageTitle: ${pageTitle}`);
  }
}
