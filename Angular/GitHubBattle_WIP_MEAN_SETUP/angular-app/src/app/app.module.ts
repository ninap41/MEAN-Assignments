import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { FormsModule } from '@angular/forms'; // <-- Import FormsModule
import { HttpModule } from '@angular/http'; 
 import { DataService } from './data.service';
import { AppComponent } from './app.component';
import { BattlesComponent } from './battles/battles.component';
import { MatchesComponent } from './matches/matches.component';
import { HomepageComponent } from './homepage/homepage.component';
import { UsersComponent } from './users/users.component';



@NgModule({
  declarations: [
    AppComponent,
    BattlesComponent,
    MatchesComponent,
    HomepageComponent,
    UsersComponent
    
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
  ],
  providers: [ DataService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
