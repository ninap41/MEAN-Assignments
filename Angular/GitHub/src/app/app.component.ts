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
	    .then(username => {  //  return this.http.get(`https://api.github.com/users/${ username }`) 
	        if (username.id){
            console.log(username.id);
            console.log(this.username);
            this.score = username.public_repos + username.followers + username.following;
            console.log(username.public_repos);
            console.log(username.followers);
            console.log(username.following);
            this.message = `is a user! They have ${username.public_repos} public repositiories, ${username.followers} followers, and are following ${username.following} developers.  Thier GitHub Score is...`
            this.dontExist = false;
            
          }
         
            this.dontExist = true;
            this.score = null;
          
          console.log(username)

	      })
        .catch(err => this.message = 'Person not found');
        this.dontExist = true;
       
	  }

    
  }

