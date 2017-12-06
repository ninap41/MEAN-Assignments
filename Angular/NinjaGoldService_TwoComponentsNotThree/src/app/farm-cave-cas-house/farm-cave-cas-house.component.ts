import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { GoldService } from '../gold.service';


@Component({
  selector: 'app-farm-cave-cas-house',
  templateUrl: './farm-cave-cas-house.component.html',
  styleUrls: ['./farm-cave-cas-house.component.css']
})
export class FarmCaveCasHouseComponent implements OnInit {
  gold: number = 0;
  log =[];
  where : String= "";
  @Input() myLogs;
  @Output() myEvent= new EventEmitter; //from the child
  @Output() myEvent2= new EventEmitter; //from the child
  
  // @Output() myEvent2= new EventEmitter; 
  
  constructor(private _dataService: GoldService) { }

  ngOnInit() {
  this.gold = this._dataService.retrieveGold(); //redfeingint he empty var at the top with our DATA
  this.log = this._dataService.retrieveLog(); //redfeingint he empty var at the top with our DATA
  
}

  farmGold(event,amount : number,log){
    this.where="Farm"
    amount= Math.floor(Math.random() * (5-2) + 2);
    this.gold = this._dataService.sumGold(amount)
    this.myEvent.emit(amount)  
 
    this.log.push("Retrieved " + amount + " gold from the " + this.where + "!")
    this.myEvent2.emit(this.log)  
    console.log(this.log)
    console.log("GET THAT DAT FARM GOLD");

  }

  caveGold(event,amount){
    this.where="Cave"
    amount= Math.floor(Math.random() * (10-5) + 5);
    this.gold = this._dataService.sumGold(amount)
    this.myEvent.emit(amount)
    this.log.push("Retrieved " + amount + " gold from the " + this.where + "!")
    console.log("GET THAT DAT CAVE GOLD");
    
  }

  casinoGold(event, amount){
    this.where="Casino"
    amount= Math.floor(Math.random()*200) - 100;
    this.gold = this._dataService.sumGold(amount)
    this.myEvent.emit(amount)
    console.log("GET THAT DAT SINO GOLD");
    if(amount < 0){
    var log = this.log.push("Lost " + amount + " gold from the " + this.where + "!") 
    }
    else {
      this.log.push("Retrieved " + amount + " gold from the " + this.where + "!")
    }
    
  }

  houseGold(event, amount){
    this.where="House"
    amount= Math.floor(Math.random() * (15-7) + 7);
    this.gold = this._dataService.sumGold(amount)
    this.myEvent.emit(amount)
    console.log("GET THAT DAT HOUSE GOLD");
    this.log.push("Retrieved " + amount + " gold from the " + this.where + "!")
  }

 

}
