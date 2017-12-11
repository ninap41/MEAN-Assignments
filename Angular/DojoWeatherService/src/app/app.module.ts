import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { WeatherService } from './weather.service';
import { AppRoutingModule } from './app-routing.module';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DestinationComponent } from './destination/destination.component';


@NgModule({
  declarations: [
    AppComponent,
    DestinationComponent,
 

  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [ WeatherService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
