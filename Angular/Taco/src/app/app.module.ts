import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavBarComponent } from './Components/nav-bar/nav-bar.component';

/*  Angular Material */
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { SideNavBarComponent } from './Components/side-nav-bar/side-nav-bar.component';

@NgModule({
  declarations: [AppComponent, NavBarComponent, SideNavBarComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // Angular Material
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
