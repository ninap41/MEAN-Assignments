import { Component } from '@angular/core';
import { Human } from './human';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Power Level!';
  newLevel = new Human();
  ThePower : number = null;

  onSubmit(){

    this.ThePower= this.newLevel.PowerLevel;

  }
}
