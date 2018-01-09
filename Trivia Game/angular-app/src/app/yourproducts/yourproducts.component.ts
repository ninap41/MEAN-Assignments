import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Product } from '../product';  //INPUT MODEL
import { User } from '../user';  
import { Router } from '@angular/router'
import { RouterModule, Routes } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { ViewproductComponent } from '../viewproduct/viewproduct.component';


@Component({
  selector: 'app-yourproducts',
  templateUrl: './yourproducts.component.html',
  styleUrls: ['./yourproducts.component.css']
})
export class YourproductsComponent implements OnInit {

  updatedProduct = {
    productID: '',
    productname: '',
    description: '',
    price: ''
  }


  ProductList= [];
  currentUser;
  thisProduct;
  loggedList=[]
  // updateProduct = []

  constructor(private _dataService: DataService,
    private _router: Router) { 

    this.loggedList = this._dataService.retrieveLogged()
    this._dataService.retrieveProducts()
    .then(data => this.ProductList = data.results)
    console.log(this._dataService.retrieveProducts());  
  
  }

  ngOnInit() {
    this._dataService.retrieveProducts();
    this.loggedList = this._dataService.retrieveLogged()
  }

  deleteProduct(product){
    this._dataService.removeProduct(product)
    .then(data => {
      if(data.error){
        console.log('delete error')
      }
      else{
        console.log(this.ProductList)
        console.log(product)
        this._dataService.retrieveProducts()
        .then(data => this.ProductList = data.results)
        console.log(this._dataService.retrieveProducts()); 
        this._router.navigateByUrl('/products')
      }
    })
    this._router.navigate(['/success'])
  }


    }
  
  


