import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

import { Store, select } from '@ngrx/store';
import * as fromRoot from './store';
import * as fromUser from './store/user';
import * as fromDictionaries from './store/dictionaries';
import { Observable } from 'rxjs';

@Component({
  selector: 'mospri-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Mostaql Primum';

  isAuthorized$: Observable<boolean>;

  constructor(private store: Store<fromRoot.State>) {}

  ngOnInit() {
    this.isAuthorized$ = this.store.pipe(select(fromUser.getIsAuthorized));
    this.store.dispatch(new fromUser.Init());
    this.store.dispatch(new fromDictionaries.Read());
  }

  onSignOut(): void {
    this.store.dispatch(new fromUser.SignOut());
  }

  // constructor(private afs: AngularFirestore) {}

  // ngOnInit() {

  //   // this.afs
  //   //   .collection('test')
  //   //   .snapshotChanges()
  //   //   .subscribe((items) => {
  //   //     console.log(items.map((item) => item.payload.doc.data()));
  //   //   });
  // }
}
