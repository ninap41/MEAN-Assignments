import { Component, OnInit,Input } from '@angular/core';
import { GoldService } from '../gold.service';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent implements OnInit {
  @Input() myLogs;
  gold: number = 0;
  log  =[];
  

  constructor(private _dataService: GoldService) { }

  ngOnInit() {
  this.gold = this._dataService.retrieveGold(); //redfeingint he empty var at the top with our DATA
  this.myLogs = this._dataService.retrieveLog(); //redfeingint he empty var at the top with our DATA
  }


}
