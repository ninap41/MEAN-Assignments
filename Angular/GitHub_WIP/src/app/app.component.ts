import { Component,Input, EventEmitter, Output } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GitHub Score';
  data : any[] = [];
  username : string ="";
  promise : any = null;
  score;
  dontExist: boolean = null;
  message: string =""
  

  constructor(private _dataService: DataService) {}
  

  getScore(){
    console.log(this.username);
    this.promise = this._dataService.getUser(this.username); ///get promise from dataservice the way we'd get USers
      this._dataService.getUser(this.username)
	    .then(user => {
	        if (user.id){
            console.log(user.id);
            console.log(this.username);
            this.score = user.public_repos + user.followers + user.following;
            console.log(user.public_repos);
            console.log(user.followers);
            console.log(user.following);
            this.message = `is a user! They have ${user.public_repos} public repositiories, ${user.followers} followers, and are following ${user.following} developers.  Thier GitHub Score is...`
            this.dontExist = false;
            
          }
         
            this.dontExist = true;
            this.score = null;
          
          console.log(user)

	      })
        .catch(err => this.message = 'Person not found');
        this.dontExist = true;
       
	  }

    
  }

