import { Component,Input,EventEmitter,Output } from '@angular/core';
import { GoldService } from './gold.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  gold: number = 0;
  myGold = 0;
  title = 'Ninja Gold Service';
  log  =[];
  
  constructor(private _dataService: GoldService) { }

  ngOnInit() {
  this.gold = this._dataService.retrieveGold(); //redfeingint he empty var at the top with our DATA
  this.log = this._dataService.retrieveLog(); //redfeingint he empty var at the top with our DATA
  
}

  invokeRetrieve(event, amount :number, who){
    
    amount = this._dataService.retrieveGold()

    this.myGold += amount;

  }

  

invokeLOGretrieve(event, log){
  log = this._dataService.retrieveLog()


}



}
