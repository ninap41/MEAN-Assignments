import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'US TimeZones!';
  today = new Date();
  timeZone = ''; // empty variable to plug timezone into
  Region =""
  // color : String = 'blue';
  color = 'blue';

  FindZone(Zone) { 
    this.today = new Date();

    if (Zone ==='MST'){
      // this.today  = Date.now();
      this.today.setHours(this.today.getHours() -1);
      this.Region="Mountain Standard";
      this.color = 'blue';
    }
    else if(Zone ==='PST'){
      this.today.setHours(this.today.getHours() -2);
      this.Region="Pacific Standard";
      this.color = 'green';
        
    }
    else if (Zone ==='EST'){
      this.today.setHours(this.today.getHours() +2);
      this.Region="Eastern Standard";
      this.color = 'red';
      }
      else if (Zone ==='CST'){
        this.today.setHours(this.today.getHours() +0);
        this.Region="Central Standard"; 
        this.color = 'orange';
        
        }
       
     else{
      this.Region ="";
      this.timeZone  = Zone;
      this.color = 'black';
        }

      
       
        
        
    }
 

  }


