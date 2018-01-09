import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { FormsModule } from '@angular/forms'; // <-- Import FormsModule
import { HttpModule } from '@angular/http'; 
 import { DataService } from './data.service';
 import { EventService } from './event.service';
 import { EnemyService } from './enemy.service';

import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { FirstComponent } from './first/first.component';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    FirstComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
  ],
  providers: [ DataService,EventService,EnemyService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
