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
> npm audit fix --force

# src/environments ,,, //firebase1 
> ,firebase: { grab api keys from firebase console } //ends ,,,


# adding forms




# adding firestore 

