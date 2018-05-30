import { AuthGuard } from './Auth/auth.guard';
import 'hammerjs'
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AngularFireModule, FirebaseOptionsToken } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AppComponent } from './app.component';
import { MatButtonModule, MatCheckboxModule, MatCard, MatInputModule, MatCardModule, MatSelectModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { AppRoutingModule } from './/app-routing.module';
import { CompanyListComponent } from './Company/company-list/company-list.component';
import { CompanyService } from './Company/company.service';
import { CompanyEditComponent } from './Company/company-edit/company-edit.component';
import { ContactEditComponent } from './Contact/contact-edit/contact-edit.component';
import { ContactListComponent } from './Contact/contact-list/contact-list.component';
import { ContactService } from './Contact/contact.service';
import { AuthService } from './Auth/auth.service';
import { HomeComponent } from './home/home.component';

const firebaseConfig = {
  apiKey: "AIzaSyC1vIXBi6nAiGZ0F2c1_SL7taXAwD_FSZw",
  authDomain: "angualrfirebasedemo.firebaseapp.com",
  databaseURL: "https://angualrfirebasedemo.firebaseio.com",
  projectId: "angualrfirebasedemo",
  storageBucket: "angualrfirebasedemo.appspot.com",
  messagingSenderId: "245482536630"
};

@NgModule({
  declarations: [
    AppComponent,
    CompanyEditComponent,
    CompanyListComponent,
    ContactEditComponent,
    ContactListComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, ReactiveFormsModule,
    AngularFireModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    MatButtonModule, MatToolbarModule, MatIconModule, MatCardModule, MatInputModule,MatSelectModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    AppRoutingModule
  ],
  providers: [
    { provide: FirebaseOptionsToken, useValue: firebaseConfig },
    AuthGuard,
    CompanyService,
    ContactService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
