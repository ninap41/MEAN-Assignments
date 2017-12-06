import { Component, OnInit, Input, EventEmitter} from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-beta',
  templateUrl: './beta.component.html',
  styleUrls: ['./beta.component.css']
})
export class BetaComponent implements OnInit {

  sum : number = 0;
  numbers : number[] = [];
  constructor(private _dataService: DataService) {}
  ngOnInit() {

  this.numbers = this._dataService.retrieveNumbers();  
}  

sumNum(sum){
  
  this.sum = this._dataService.sumNumber(this.sum);
  console.log(this.sum);
}

differenceNum(){
  
  // this._dataService.popNumber(this.numbers.length-1);
}



}
