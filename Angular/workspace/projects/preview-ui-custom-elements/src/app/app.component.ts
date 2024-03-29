import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'preview-ui-custom-elements';

  constructor(private afs: AngularFirestore) {}

  ngOnInit() {
    this.afs
      .collection('test')
      .snapshotChanges()
      .subscribe((items) => {
        console.log(items.map((item) => item.payload.doc.data()));
      });
  }
}
