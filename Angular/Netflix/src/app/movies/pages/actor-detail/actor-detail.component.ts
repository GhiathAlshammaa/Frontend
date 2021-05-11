import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Actor } from '@app/core/models';
import { StaffService } from '@app/core/services';
import { EMPTY, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-actor-detail',
  templateUrl: 'actor-detail.component.html',
  styleUrls: ['actor-detail.component.scss'],
})
export class ActorDetailComponent implements OnInit {
  actorById$;
  actorId = 0;
  errorMsg: any;
  constructor(
    private staffService: StaffService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.actorId = +this.route.snapshot.paramMap.get('id');
    // console.log(`actorId: ${this.actorId}`);

    this.actorById$ = this.staffService.actorById$(this.actorId).pipe(
      catchError((err) => {
        this.errorMsg = err;
        return EMPTY;
      })
    );
    this.actorById$.subscribe();
  }
}
