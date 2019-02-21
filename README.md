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
## app.module.tx

> import { ReactiveFormsModule } from '@angular/forms'; //form1
>  imports: [ ,ReactiveFormsModule //form1


# adding firestore 

