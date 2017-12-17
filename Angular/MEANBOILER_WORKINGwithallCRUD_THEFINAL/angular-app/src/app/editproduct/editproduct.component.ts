import { Component, OnInit } from '@angular/core';
//Models
import { Product } from '../product'; 
import { User } from '../user';  

//ROUTES && SERVICES
import { DataService } from '../data.service';
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
  // currentUser=[];
  updatedProduct = {
    productID: '',
    productname: '',
    description: '',
    price: ''
  }
  retrievedProduct =[]
  ProductList = [];
  currentUser = new User;
  loggedList=[]

  
  constructor(
    private _dataService: DataService,
    private _router: Router,//FOR NAVIGATING SOMEWHERE ELSE? wth
    private _route: ActivatedRoute //FOR PARAMS
  ) 
   {    
    //  this.loggedList = this._dataService.retrieveLogged()   
    // this._dataService.findProduct(this.updatedProduct)
    //  .then(data => this.thisProduct = data) ///retrieve by ID

     this._dataService.retrieveProducts()
      .then(data => this.ProductList = data.results)
      console.log(this._dataService.retrieveProducts());  // getting all objects so if I have the index of this list its all cool. this list is my DB
    }
    ngOnInit() {
  
        this.ProductList = this._dataService.ProductList
        this._dataService.retrieveProducts()
        .then(data => this.ProductList = data.results)


        this._route.paramMap.subscribe(params => {
        this.updatedProduct.productID= params.get('id')      
        })
  }

  editProduct(){
    console.log()
    this._dataService.updateProduct(this.updatedProduct)
    .then(data => {this._router.navigateByUrl('/yourproducts')
    });
  }
}