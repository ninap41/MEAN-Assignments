import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Product } from '../product';  //INPUT MODEL
import { Router } from '@angular/router'
import { RouterModule, Routes } from '@angular/router';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-editproduct',
  templateUrl: './editproduct.component.html',
  styleUrls: ['./editproduct.component.css']
})
export class EditproductComponent implements OnInit {

 
  valid= false;

  list = [];

  currentUser=[];

  product: any;
  ProductList = [];
  constructor(
    private _dataService: DataService,
    private _router: Router,//FOR NAVIGATING SOMEWHERE ELSE? wth
    private _route: ActivatedRoute //FOR PARAMS
  ) {    
      this._dataService.retrieveProducts()
      .then(data => this.ProductList = data.results)
      console.log(this._dataService.retrieveProducts()); 
    }
    ngOnInit() {
        this._dataService.retrieveProducts()
        this.product = 'products' + this.product._id;
        this._route.paramMap.subscribe(params => {
        this.product =  'products' + params['_id']
      })
  }


  editProduct(product){
    this._dataService.updateProduct(product)
    .then(data => {
      if(data.error){
        console.log('update error')
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
