import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireStorageModule } from '@angular/fire/storage';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { env } from '@todo-src/environments/environment';
import { HeaderComponent } from './components/header/header.component';

// Material
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

// Store
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
const StoreDevtools = !env.production
  ? StoreDevtoolsModule.instrument({ maxAge: 50 })
  : [];

@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(env.firebase.config),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    // Material
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,

    StoreDevtools,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
