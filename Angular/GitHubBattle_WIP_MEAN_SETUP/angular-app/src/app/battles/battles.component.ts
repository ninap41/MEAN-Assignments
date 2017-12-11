import { Component, OnInit } from '@angular/core';
//Services and Routers
import { DataService } from '../data.service';
import { Router } from '@angular/router'
import { RouterModule, Routes } from '@angular/router';
//components
import { MatchesComponent } from '../matches/matches.component';
import { UsersComponent } from '../users/users.component';
//models
import { User } from '../user';  

@Component({
  selector: 'app-battles',
  templateUrl: './battles.component.html',
  styleUrls: ['./battles.component.css']
})
export class BattlesComponent implements OnInit {

// newProduct = new Product();
BattleLog : any;
battles: any;

  constructor(
  private _dataService: DataService,
  private _router: Router)
  {
   
 }

  ngOnInit() {
    // this._dataService.retrieveBattles();
  }

  
}