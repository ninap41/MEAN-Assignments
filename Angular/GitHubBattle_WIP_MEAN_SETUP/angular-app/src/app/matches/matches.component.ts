import { Component, OnInit } from '@angular/core';

//Services and Routers
import { DataService } from '../data.service';
import { Router } from '@angular/router'
import { RouterModule, Routes } from '@angular/router';
//Components
import { BattlesComponent } from '../battles/battles.component';
import { UsersComponent } from '../users/users.component';


@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css']
})
export class MatchesComponent implements OnInit {

  constructor(
    private _dataService: DataService,
    private _router: Router
  ) { 

 // this._dataService.retrieveBattles()
    // .then(data => this.BattleLog = data.results)
    // console.log(this._dataService.retrieveBattles());  

  }

  ngOnInit() {
  }

}

