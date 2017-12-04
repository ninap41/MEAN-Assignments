import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Switchboard';
  pre_status = "Off";
  button_status = null; // act as index
  buttons =["Off","Off", "Off", "Off", "Off", "Off", "Off","Off","Off", "Off", "Off", "Off", "Off", "Off"];
  color = 'red';
  messages= []
 
  ChangeStatus(idx) { 
    if(this.messages[0] === "-You have reset the Switchboard!"){
      this.messages=[];
     }
    else if (this.buttons[idx] === "Off"){
      this.buttons[idx]= "On";
      this.color = 'green';
      this.messages.push(" Switch was turned ON!");
      
    }
    else {
      this.buttons[idx]="Off";
      this.color = 'red';
      this.messages.push("Switch was turned OFF!");
      
    }

    // ChangeColor(color){
    //   if colo
    // }
   

  }

  Declare(idx){
   
    if (this.buttons[idx] === "Off"){
      this.messages.push("Woah, You turned it on!");
      this.color = 'green'
    }
    else {
      this.buttons[idx]="On";
      this.color = 'red';
      this.messages.push("Woah, You turned it off...");
    }

  }

  Reset(idx){
    // this.buttons =["Off","Off", "Off", "Off", "Off", "Off", "Off","Off","Off", "Off", "Off", "Off", "Off", "Off"];
    for(var i = 0; i < this.buttons.length; i++){
        this.buttons[i] = "Off"; 
    }
    this.color = 'red';
    this.messages = [];
    this.messages.push("-You have reset the Switchboard!")
  }

  
}

  


