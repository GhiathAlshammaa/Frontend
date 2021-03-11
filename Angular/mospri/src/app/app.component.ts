import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

import { Store } from '@ngrx/store';
import * as fromRoot from './store';
import * as fromUser from './store/user';
import * as fromDictionaries from './store/dictionaries';

@Component({
  selector: 'mospri-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Mostaql Primum';

  constructor(private store: Store<fromRoot.State>) {}

  ngOnInit() {
    this.store.dispatch(new fromUser.Init());
    this.store.dispatch(new fromDictionaries.Read());
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
