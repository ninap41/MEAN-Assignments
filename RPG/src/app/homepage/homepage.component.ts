import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Product } from '../product';  //INPUT MODEL
import {Weapon} from '../weapon'
import {Human} from '../human'


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
gameStart;
Player



  constructor(private _dataService: DataService)
  {
    this.Player = this._dataService.retrievePlayer();
    this.gameStart =  this._dataService.startGame 
 }
 

  ngOnInit() {
    this.Player = this._dataService.retrievePlayer();
    this.gameStart =  this._dataService.startGame 
    
   
  }

  GameStart(){
    this._dataService.createPlayer(this.Player)
    this.gameStart = true;
  }

}
