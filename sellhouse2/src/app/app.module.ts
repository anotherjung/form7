import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { FormComponent } from './form/form.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component'; //bootstrap1 

import { AngularFireModule } from 'angularfire2';  //form9
import { environment } from '../environments/environment'; //form9
import { AngularFirestoreModule } from 'angularfire2/firestore'; //form9

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
    ,ButtonsModule.forRoot() //bootstrap1
    ,AngularFireModule.initializeApp(environment.firebase), //form9
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features //form9
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
