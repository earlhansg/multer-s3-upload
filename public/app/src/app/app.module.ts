import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
// import { HomeComponent } from './home/home.component';

import { AppRouting } from './app-routing.module';

import { AppBootstrapModule } from './core/app-bootstrap.module';
import { AppHomeModule } from './home/app-home.module';
// import { LoginComponent } from './home/login/login.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppBootstrapModule,
    AppHomeModule,
    AppRouting
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
