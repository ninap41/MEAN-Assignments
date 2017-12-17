import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
//INPUT MODEL
import { Product } from '../product';  
import { User } from '../user';  
//IMPORT BOILER
import { Router } from '@angular/router'
import { RouterModule, Routes } from '@angular/router';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-createproduct',
  templateUrl: './createproduct.component.html',
  styleUrls: ['./createproduct.component.css']
})
export class CreateproductComponent implements OnInit {


newProduct = new Product();
valid= false;
ProductList =[]
currentUser = new User;
loggedList= [];


constructor(
  private _dataService: DataService,
  private _router: Router,
  private _route: ActivatedRoute
) 
  { 
    this.loggedList = this._dataService.retrieveLogged()
  }

ngOnInit() {
  // this.loggedList = this._dataService.retrieveLogged()
  this._dataService.retrieveProducts()
    .then(data => this.ProductList = data.results)
}

onSubmit(){
console.log("ONSUBMIT" + this.loggedList[0])
this._dataService.createProduct(this.newProduct)
    .then(data => this._router.navigateByUrl('/products'));
    this._router.navigateByUrl('/products')
  }
}
