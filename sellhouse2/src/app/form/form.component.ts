import { Component, OnInit } from '@angular/core';

import { AngularFirestore } from 'angularfire2/firestore'; //form11
import { Observable } from 'rxjs'; //form11


import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms'; //form12

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor(private fb: FormBuilder, 
    private afs: AngularFirestore) { 
      this.items = afs.collection('items').valueChanges();
    }

        //form11
  items: Observable<any[]>;

  ngOnInit() {

    //form11
     //add
     this.myForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      name: ['', Validators.required],
      message: ['', Validators.required]
    })
    this.myForm.valueChanges.subscribe();
  }

  myForm: FormGroup; //form11
  //form state
  loading = false;
  success = false;

  async submitHandler(){
    this.loading = true;
    const formValue = this.myForm.value;
    try {
      await this.afs.collection('items')
        .add(formValue);
        this.success = true;
    } catch(err) { console.error(11,err)}
    this.loading = false;
  }
  get email(){
    return this.myForm.get('email');
  }
  get name(){
    return this.myForm.get('name');
  }
  get message(){
    return this.myForm.get('message');
  }


}
