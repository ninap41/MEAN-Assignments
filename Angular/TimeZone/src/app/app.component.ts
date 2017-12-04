import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TimeZone!';
  today = new Date();
  timeZone = null;

  onButtonClick(Zone) { 
    this.today = new Date();
    if timezone ==='MST'
  }
}


