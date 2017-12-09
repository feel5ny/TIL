import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import appRoutes from './app.routes';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { DeveloperComponent } from './developer/developer.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    DeveloperComponent
  ],
  imports: [
    BrowserModule,
    appRoutes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
