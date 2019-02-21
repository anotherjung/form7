import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { FormComponent } from './form/form.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component'; //bootstrap1 

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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
