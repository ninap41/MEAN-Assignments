import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "Vader's Web of Annihilation";
  vadesCool = true;
  // x : number= 0;
  // y : number = 10;
  Son : String = 'Luke (son)';
  myStr: String = "'Dad, you're embarrassing me. Remove this awful site immediately...' - Luke Skywalker";
  name = 'Darth Vader';
	user = {
		firstName: 'Darth',
    lastName: 'Vader',
    hobbies: ['Planetary Destruction','Smooth Jazz','Father/Son Bonding']
  }
  today = new Date();
}
