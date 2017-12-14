import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { Router } from '@angular/router'
import { RouterModule, Routes } from '@angular/router';
//MODEL IMPORTS
import { Product } from './product'; 



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Anonyonoumous notes';

  valid = false;
  newProduct = new Product();
  ProductList =[]
  
  constructor(
    private _dataService: DataService,
    private _router: Router )
  {
    this._dataService.retrieveProducts()
    .then(data => this.ProductList = data.results)
    console.log(this._dataService.retrieveProducts());  
   }

 ngOnInit()
 {
   
  this._dataService.retrieveProducts()
  //redfeingint he empty var at the top with our DATA
 }

  
  
  




}
