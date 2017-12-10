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
  title = 'BOILER- PRODUCT MANAGEMENT';
  valid = false;
  user = new User();
  users = [];
  currentUser;
  constructor(
    private _dataService: DataService,
    private _router: Router )
  {
    this.currentUser = this._dataService.returnUser();  
    
 }

 ngOnInit()
 {
   console.log( this._dataService.currentUser)
  // this.ProductList = this._dataService.retrieveProducts(); //redfeingint he empty var at the top with our DATA
  
 }

Leave(user){

  this.user = this.currentUser;
  console.log(this.user);
  this._router.navigateByUrl('')

}

}
