import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CreateCardComponent } from './create-card/create-card.component';
import { AddWishesComponent } from './add-wishes/add-wishes.component';

// Firebase and Firestore
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';

const config = {
  apiKey: "AIzaSyAqXskhRHylMf86lFJ33omYh8-wcm3TB5c",
  authDomain: "cardmiral.firebaseapp.com",
  projectId: "cardmiral",
  storageBucket: "cardmiral.appspot.com",
  messagingSenderId: "297380688108",
  appId: "1:297380688108:web:2f9364e2e6afbac3a975c9"
};

@NgModule({
  declarations: [
    AppComponent,
    CreateCardComponent,
    AddWishesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
