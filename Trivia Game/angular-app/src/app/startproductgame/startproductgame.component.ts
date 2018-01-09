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
  selector: 'app-startproductgame',
  templateUrl: './startproductgame.component.html',
  styleUrls: ['./startproductgame.component.css']
})
export class StartproductgameComponent implements OnInit {

  valid = false;
  currentUser = new User;
  
  user = new User();

  scoreList =[]
  userList =[]
  ErrorMessage: string;
  loggedList=[]
  RandomProduct: Product;
  catchErrors = {};
  ProductList=[]

  score;
  question1state;
  question2state;
  question3state;

  
  constructor
  ( private _dataService: DataService,
    private _router: Router,
    private _route: ActivatedRoute)

{
    
  this._dataService.retrieveScores()
  .then(data => this.scoreList = data.scoreResults)
  console.log(this._dataService.retrieveScores());  

   this._dataService.retrieveUsers()
    .then(data => this.userList = data.userResults)
    console.log(this._dataService.retrieveUsers());  

    this._dataService.retrieveProducts()               
    .then(data => this.ProductList = data.results)              //if retrieving does not because of 'PROMISE' ex I have an 'any'
 }
  ngOnInit() {
    this.loggedList = this._dataService.retrieveLogged()
    
  }


  createScore(){

  }

}
