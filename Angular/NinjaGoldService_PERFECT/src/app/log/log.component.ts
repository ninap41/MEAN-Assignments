import { Component, OnInit, Input,Output,EventEmitter} from '@angular/core';
import { DataService } from '../gold.service';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent implements OnInit {
  @Input() myLogs;
  log= [];
  // @Output() myEvent3= new EventEmitter; 
  gold: number = 0;
  
  

  constructor(private _dataService: DataService) { }

  ngOnInit() {
  this.gold = this._dataService.retrieveGold(); //redfeingint he empty var at the top with our DATA
  this.log = this._dataService.retrieveLog(); //redfeingint he empty var at the top with our DATA
  }


}
