import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';



@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  // trackByFn(idx, item) {
  //   return item.id;
  // }
@Input() myQuotes;
orderBy: 'myQoutes.vote'

@Output() myEvent= new EventEmitter; //from the child
@Output() myEvent2= new EventEmitter; //
@Output() myEvent3= new EventEmitter;
  constructor() { }

  delQuoteP(event,idx){
    // this.myQuotes.splice(idx, 1)
    this.myEvent.emit(idx);//index of quote
  }

  upQuoteP(event,idx){
    console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
    this.myEvent2.emit(idx);//index of quote
  }

  downQuoteP(event,idx,vote){
    this.myEvent3.emit(idx);//index of quote
    console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");


  }

  ngOnInit() {

  }

}
