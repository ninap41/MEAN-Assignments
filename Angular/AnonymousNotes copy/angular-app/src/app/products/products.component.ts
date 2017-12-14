import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Product } from '../product';  //INPUT MODEL
import { Router } from '@angular/router'
import { RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

newProduct = new Product();
ProductList= [];
products: any;
  constructor(private _dataService: DataService,
  private _router: Router)
  {

    this._dataService.retrieveProducts()
    .then(data => this.ProductList = data.results)
    console.log(this._dataService.retrieveProducts());  
 }

  ngOnInit() {
    this._dataService.retrieveProducts();
  }



  deleteProduct(product){
    this._dataService.removeProduct(product)
    .then(data => {
      if(data.error){
        console.log('delete error')
      }
      else{
        // console.log(this.ProductList)
        // console.log(product)
        this._dataService.retrieveProducts()
        .then(data => this.ProductList = data.results)
        console.log(this._dataService.retrieveProducts()); 
        this._router.navigate(['/'])
      }
    })
    this._router.navigate(['/success'])
  }
}