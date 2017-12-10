import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Product } from '../product';  //INPUT MODEL
import { Router } from '@angular/router'
import { RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-createproduct',
  templateUrl: './createproduct.component.html',
  styleUrls: ['./createproduct.component.css']
})
export class CreateproductComponent implements OnInit {


newProduct = new Product();
valid= false;
ProductList =[]
currentUser;


constructor(private _dataService: DataService,
  private _router: Router ) { 

    this.currentUser = this._dataService.returnUser();  
    
}

  ngOnInit() {
    // this._dataService.retrieveProducts()
    // .then(data => this.ProductList = data.results)
    // console.log(this.ProductList);  
}

onSubmit(){
    this._dataService.createProduct(this.newProduct)
    .then(data => this._router.navigateByUrl('/products'));
    console.log(this.newProduct);

   // if you want a local version/ non DB
    // this._dataService.pushProduct(this.newProduct);    
    // this.ProductList.push(this.newProduct);
  }
}
