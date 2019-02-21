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

import { ReactiveFormsModule } from '@angular/forms';

import { Productvideo1learnmoreComponent } from './productvideo1learnmore/productvideo1learnmore.component'; //form1
import { ModalModule } from 'ngx-bootstrap/modal'; //modal1
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { Services1photoslidesComponent } from './services1photoslides/services1photoslides.component';
import { Process123Component } from './process123/process123.component';
import { Customvideo1Component } from './customvideo1/customvideo1.component';
import { Product1vs2Component } from './product1vs2/product1vs2.component';
import { Customertype123Component } from './customertype123/customertype123.component';
import { Steps123Component } from './steps123/steps123.component'; //carousel1

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent,
    Productvideo1learnmoreComponent,
    Services1photoslidesComponent,
    Process123Component,
    Customvideo1Component,
    Product1vs2Component,
    Customertype123Component,
    Steps123Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
    ,ButtonsModule.forRoot() //bootstrap1
    ,AngularFireModule.initializeApp(environment.firebase) //form9
    ,AngularFirestoreModule // imports firebase/firestore, only needed for database features //form9
    ,ReactiveFormsModule //form1
    ,ModalModule.forRoot() //modal1
    ,CarouselModule.forRoot() //carousel1
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
