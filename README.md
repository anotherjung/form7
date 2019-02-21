# form7
# start angular 
>ng new sellhouse2
>ng serve
check :4200
>cd sellhouse2
>ng build --prod
# start firebase
>cd form7
>firebase init
firestore, hosting, single page app
update firebase.json
```
  "hosting": {
    "public": "sellhouse2/dist/sellhouse2",
```
>firebase serve
check :5000
>firebase deploy 
check https://starthere-ff136.firebaseapp.com/


# adding bootstrap & ngx-bootstrap 
## install npm 
>cd angular file 
>npm install ngx-bootstrap bootstrap --save
## update angular.json, add two styles"
> "styles": [ "./node_modules/bootstrap/dist/css/bootstrap.min.css", "./node_modules/ngx-bootstrap/datepicker/bs-datepicker.css", "src/styles.css" ],
## app.module.ts
>import { ButtonsModule } from 'ngx-bootstrap/buttons'; //bootstrap1 
>,ButtonsModule.forRoot() //bootstrap1
```
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ButtonsModule } from 'ngx-bootstrap/buttons'; //bootstrap1 

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
    ,ButtonsModule.forRoot() //bootstrap1
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```
## adding button src/app.component.html
<button type="button" class="btn btn-primary">
  Single Button
</button>

# create new components 
>ng g c form
## update app-routing.module.ts
```
import {HomeComponent } from './home/home.component'; 
import {AboutComponent } from './about/about.component'; 
import {ContactComponent } from './contact/contact.component'; 
import {FormComponent } from './form/form.component'; 

const routes: Routes = [
  { path: '', component: HomeComponent }, 
  { path: 'home', component: HomeComponent }, 
  { path: 'about', component: AboutComponent }, 
  { path: 'contact', component: ContactComponent }, 
  { path: 'form', component: FormComponent }, 
];
```
## udpate app.component.html add router-outlet
><router-outlet></router-outlet>
test paths, see page works 

# adding firestore 
> cd form angular app 
> npm install angularfire2 firebase --save 
> npm audit fix


## src/environments ,,, //firebase1 
> ,firebase: { grab api keys from firebase console } //ends ,,,

## 5&6. Setup @NgModule for the AngularFireModule & add firestore

Open /src/app/app.module.ts, inject the Firebase providers, and specify your Firebase configuration.
```
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { AngularFireModule } from 'angularfire2';  //form9
import { environment } from '../environments/environment'; //form9
import { AngularFirestoreModule } from 'angularfire2/firestore'; //form9


@NgModule({
imports: [
  imports: [
    ,AngularFireModule.initializeApp(environment.firebase) //form9
    ,AngularFirestoreModule // imports firebase/firestore, only needed for database features //form9
],
  declarations: [ AppComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
```


## 7*8. Inject AngularFirestore & Blind to list 

TIP: should have collection (named items) & document (named = name & value = something) ex.  {name:’batman’}
Open /src/app/app.component.ts, and make sure to modify/delete any tests to get the sample working (tests are still important, you know):
```
import { Component } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore'; //form11
import { Observable } from 'rxjs'; //form11

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  //form11
  items: Observable<any[]>;
  constructor(db: AngularFirestore) {
    this.items = db.collection('items').valueChanges();
    }
  //ends
}
```

## Open /src/app/app.component.html:
<!-- form11 -->
<ul>
  <li class="text" *ngFor="let item of items | async">
    {{item.name}}, {{item.email}}, 
  </li>
</ul>

# adding forms
## app.module.ts

> import { ReactiveFormsModule } from '@angular/forms'; //form1
>  imports: [ ,ReactiveFormsModule //form1

## form.component.ts
>  import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms'; //form12
add to class
```
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
```

## add to form.component.html
```
<p>
    fireformgroup works!
  </p>
  
  
  <div class="jumbotron">
  
    <!-- form11 test -->
  <ul>
      <li class="text" *ngFor="let item of items | async">
        {{item.name}}, {{item.email}}, {{item.message}}
      </li>
    </ul>
    <!-- ends -->
    </div>
  
  
  
  
  <div class="jumbotron">
      <!-- form11firebase reativeforms -->
  <form [formGroup]="myForm" [hidden]="success" (ngSubmit)="submitHandler()">
      <input formControlName="email">
      <span *ngIf="email.invalid && email.touched">
          Your email does not look right
      </span>
      <input formControlName="name">
      <span *ngIf="message.invalid && message.touched">
          Required field
      </span>
      <input formControlName="message">
      <span *ngIf="message.invalid && message.touched">
          Required field
      </span>
      <button class="btn btn-primary" [disabled]="myForm.invalid">submit</button>
    </form>
    <!-- ends -->
  
    <div *ngIf="success" class="notification is-success">
        <h1>submit success</h1>
      </div>
  
  </div>
  ```

# adding design & content
see history


#carosal 
## name.component.html  
```
      <!-- start homeowner image  -->
      <div class="jumbotron row">
          <carousel>
              <slide>
                <img src="../../assets/photos/heavenlysnowed.jpg" alt="second slide" style="display: block; width: 100%;">
              </slide>
              <slide>
                  <img src="../../assets/photos/snowboardinghandstand.jpg" alt="first slide" style="display: block; width: 100%;">
                </slide>
              <slide>
                <img src="../../assets/photos/bigsurcoast.jpg" alt="third slide" style="display: block; width: 100%;">
              </slide>
              <slide>
                  <img src="../../assets/photos/ferryny.jpg" alt="third slide" style="display: block; width: 100%;">
                </slide>
                <slide>
                    <img src="../../assets/photos/hawaiihikesunset.jpg" alt="third slide" style="display: block; width: 100%;">
                  </slide>
            </carousel>
      </div>
      ```


# install firebase functions
>cd form7
## adding firebase functions, functions, firestore, hosting, defaults
>firebase init
>npm install @sendgrid/mail --save
## update functions/index.js, remove comments for helloword
## start functions
>firebase deploy --only functions