import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router'
import { RouterModule, Routes } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
//MODEL IMPORTS
import { Product } from '../product'; 
import { User } from '../user';  

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  currentUser = new User();
  user = new User();


  constructor(
    private _dataService: DataService,
    private _router: Router)
  {
  
 }

  ngOnInit() {
    

  }


 

register(){
  this._dataService.createUser(this.user)
  .then(data => {
    
    console.log(this.currentUser)
    if (data.logged != true){   // make login function then worry...s
      console.log("made it to register")
      this.user = new User();
      this.currentUser = data.user;
    
    } else {
      console.log("registration failed")
    }
  });
  this._router.navigateByUrl('/products')
  
}






}
