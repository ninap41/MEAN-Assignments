import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { Router } from '@angular/router'
import { RouterModule, Routes } from '@angular/router';
//MODEL IMPORTS
import { Product } from './product'; 
import { User } from './user';  


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
title = 'Trivia';
valid = false;
loggedList=[];
logAttempts = 0;
ProductList=[];
RandomProduct;
 
  constructor(
    private _dataService: DataService,
    private _router: Router )
  {
    
 }

 ngOnInit()
 {
  this.loggedList = this._dataService.retrieveLogged() //if retrieving works


}

LogoutData(num : number){
  this._dataService.LogOut(num);
  this._router.navigateByUrl("")
  this.valid = false;

}

}
