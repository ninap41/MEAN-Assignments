import { Component,OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quotes } from './quotes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Quotes';
  newQuote = new Quotes();
  valid= false;
  quoteslist = [];
  
  alist= ['puppies','cats']
  

  onSubmit(){
    console.log("~~~~~~~~~~~~~~~~~~~~~~");
    this.valid = true;
    this.quoteslist.push(this.newQuote);
    this.newQuote = new Quotes();
    
  }

  invokeDel(event, idx){
    console.log("~~~~~~~~~~DELETE~~~~~~~~~~~~~~~HERE~~~~~~~~~~~WOWWOWTHIS IS HARD~~~~~~~~~~~~~~~~~~~~~~~")
    this.quoteslist.splice(idx, 1);

  }

  invokeUp(idx){
    this.quoteslist[idx].vote ++;
    console.log(idx)
    console.log("~~~~~~~~~~~UP~~~~VOTE~~~~~HERE~~~~~~~~~~WOWWOWTHIS IS HARD~~~~~~~~~~~~~~~~~~~~~~~~~")
  }

  invokeDown(idx){
    this.quoteslist[idx].vote --;
    console.log("~~~~~~~~~~~DOWN~~~~VOTE~~~~~HERE~~~~~~WOWWOWTHIS IS HARD~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")
  }

 

}

