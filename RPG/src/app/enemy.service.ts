import { Injectable } from '@angular/core';
import { DataService } from './data.service';

@Injectable()
export class EnemyService {
Player= this._dataService.retrievePlayer();
basicEnemy = {
  health: (Math.floor(Math.random() * this.Player.health / .80)),
  strength:(Math.floor(Math.random() * this.Player.strength / .80)),


}
  constructor(private _dataService: DataService) { 
    this.Player= this._dataService.retrievePlayer();

  }

}
