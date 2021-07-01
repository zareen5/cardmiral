import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from "@angular/forms";
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

// Material UI
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';

// Custom Component
import { HomeComponent } from './home/home.component';
import { CreateCardComponent } from './create-card/create-card.component';
import { AddWishesComponent } from './add-wishes/add-wishes.component';
import { CardTemplatesComponent } from './components/card-templates/card-templates.component';

import { MatGridListModule } from '@angular/material/grid-list';
import { FlexLayoutModule } from '@angular/flex-layout';

// Firebase and Firestore
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';

// Services
import { CardsService } from './services/card.service';
import { EmailService } from './services/email.service';

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
    HomeComponent,
    CreateCardComponent,
    AddWishesComponent,
    CardTemplatesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatGridListModule,
    MatCardModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    BrowserAnimationsModule,
    NgbModule,
    FlexLayoutModule,
    HttpClientModule

  ],
  providers: [
    CardsService,
    EmailService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
