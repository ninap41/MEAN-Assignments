import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { EventService } from '../event.service';
import { EnemyService } from '../enemy.service';



@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
Player;
gameStart = true;




  constructor(private _dataService: DataService) { 
    this.Player = this._dataService.retrievePlayer();

  }

  ngOnInit() {
    this.Player = this._dataService.retrievePlayer();
  }


  

}
