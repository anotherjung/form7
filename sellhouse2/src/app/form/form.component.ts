import { Component, OnInit } from '@angular/core';

import { AngularFirestore } from 'angularfire2/firestore'; //form11
import { Observable } from 'rxjs'; //form11

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  //form11
  items: Observable<any[]>;
  constructor(db: AngularFirestore) {
    this.items = db.collection('items').valueChanges();
    }
  //ends

  ngOnInit() {
  }

}
