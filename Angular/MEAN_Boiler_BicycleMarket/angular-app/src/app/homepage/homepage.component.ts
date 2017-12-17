import { Component, OnInit } from '@angular/core';
//DATA && SERVICES

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

valid = false;
currentUser = new User;

user = new User();
ProductList = [];

// UserID;
userList =[];
ErrorMessage: string;
loggedList=[]
RandomProduct: Product;
catchErrors = {};

newlist: any[] = []

  constructor
  ( private _dataService: DataService,
    private _router: Router,
    private _route: ActivatedRoute)

  {
  
    
    _dataService.findRandomProduct()
    .then((product) => { this.RandomProduct = product; })
    .catch((err) => { console.log(err); });

    this._dataService.retrieveUsers()
    .then(data => this.userList = data.userResults)
    console.log(this._dataService.retrieveUsers());  

    this._dataService.retrieveProducts()               
    .then(data => this.ProductList = data.results)              //if retrieving does not because of 'PROMISE' ex I have an 'any'
 }
  ngOnInit() {
    this.loggedList = this._dataService.retrieveLogged()
  }

register(){
  this._dataService.createUser(this.user)
  .then(data => {
    if (data.logged != true){   
      this.valid = true;
      console.log("made it to register")
      this.user = new User();
      this.user.lastName = data.lastname 
      this.user.id = data.LoggedUserId
      this.user.email = data.LoggedUserEmail
      this.user.firstName= data.LoggedUserName
      console.log(this.user)
      this._dataService.SessEm(this.user)
      this._router.navigateByUrl('/')
    } 
    else {
      console.log("registration failed")
    }
  })
  .catch(err => this.ErrorMessage = err.error)
  this._router.navigateByUrl('/')
}


login() {

  this._dataService.loginUser(this.user)
  .then(data => {
    if (data.logged != true){   // make login function then worry...s
      console.log("made it to LOGIN")
      this.valid = true;
      this.user = new User();
      this.user.id= data.LoggedUserId
      this.user.email = data.LoggedUserEmail
      this.user.firstName= data.LoggedUserName
      this._dataService.SessEm(this.user)
    } 
    else {
      (err => this.ErrorMessage = err.error)
      console.log(data.err)
    }
  })
  .catch((err) => { 
    this.ErrorMessage = err.error
    console.log(this.ErrorMessage)
    
    if (err.status == '401') {
      this.ErrorMessage= "Email does not";
      
    }
    else if (err.status == '402') {
      this.ErrorMessage= "Password is incorrect.";
      // this._router.navigateByUrl('/')
    }
    
    
  })
}



}
