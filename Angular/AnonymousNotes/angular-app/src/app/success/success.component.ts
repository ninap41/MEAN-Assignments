import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Product } from '../product';  //INPUT MODEL
import { Router } from '@angular/router'
import { RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit {

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
 onSubmit(){
  this._dataService.createProduct(this.newProduct)
  .then(data => this._router.navigateByUrl('/products'))
  
      this._router.navigateByUrl('/')
    
  
  
  
}



}