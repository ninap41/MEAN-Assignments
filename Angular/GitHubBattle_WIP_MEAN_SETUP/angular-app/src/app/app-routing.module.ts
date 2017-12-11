import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { BattlesComponent } from './battles/battles.component';
import { MatchesComponent } from './matches/matches.component';
import {UsersComponent } from './users/users.component';

import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [
  {path: '', component: HomepageComponent, pathMatch:'full'},

  
  { path: 'battles', component: BattlesComponent},
  { path: 'matches', component: MatchesComponent},
  { path: 'users', component: UsersComponent},
  { path: 'battleagain', component: HomepageComponent},
  


  //NEW STUFF
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

