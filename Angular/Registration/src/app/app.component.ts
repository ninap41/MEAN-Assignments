import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent {
  title = 'Registration';
  user = new User();
  users = [];
  valid = false;
  message = "";

  Register(){     
      this.valid = true;
      this.users.push(this.user);
      this.user = new User();
    
    }

  Login(){
    
  }
  }

