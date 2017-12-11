import { Component, OnInit } from '@angular/core';
//Services and Routers
import { DataService } from './data.service';
import { Router } from '@angular/router'
import { RouterModule, Routes } from '@angular/router';
//COMPONENTS
import { BattlesComponent } from './battles/battles.component';
import { MatchesComponent } from './matches/matches.component';
//MODEL IMPORTS
import { User } from './user';  
import { Battle } from './battle';  





@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GitHubBattle!!';
  valid = false;
  user = new User();
  users = [];
  currentUser;
  constructor(
    private _dataService: DataService,
    private _router: Router )
  {
    
 }

 ngOnInit()
 {
   console.log( this._dataService.currentUser)
  
 }



}
