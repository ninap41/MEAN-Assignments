import { Component,Input,EventEmitter,Output } from '@angular/core';
import { DataService } from './gold.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  gold: number = 0;
  myGold = 0;
  title = 'Ninja Gold Service';
  myLog  =[];
  log=[];
  
  constructor(private _dataService: DataService) { }

  ngOnInit() {
  this.gold = this._dataService.retrieveGold(); //redfeingint he empty var at the top with our DATA
  this.log = this._dataService.retrieveLog(); //redfeingint he empty var at the top with our DATA
  
}

  invokeRetrieve(event, amount :number,log){ //HOW DOES THIS GET EVERYTHING!?  Apprently data service?
    amount = this._dataService.retrieveGold()
    log = this._dataService.retrieveLog()
    this.myGold += amount;
    this.myLog.push(log);
    console.log("~~~~~~~~~~~~~~~~~~~" + this.myLog)
  }
}
