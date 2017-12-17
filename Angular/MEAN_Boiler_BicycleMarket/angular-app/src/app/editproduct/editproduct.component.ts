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
  updatedProduct: Product;
  ID:string
  ProductList = [];
  currentUser = new User;
  loggedList=[]
  
  constructor(
    private _dataService: DataService,
    private _router: Router,//FOR NAVIGATING SOMEWHERE ELSE? wth
    private _route: ActivatedRoute //FOR PARAMS
  ) 
   {    
     this.loggedList = this._dataService.retrieveLogged()     
     this._dataService.retrieveProducts()
      .then(data => this.ProductList = data.results)
      console.log(this._dataService.retrieveProducts());  // getting all objects so if I have the index of this list its all cool. this list is my DB
    }
    ngOnInit() {
        this._dataService.retrieveProducts()
        .then(data => this.ProductList = data.results)
        this.updatedProduct;
        this._route.params.subscribe(params => {
        this.updatedProduct= params['id']
      })
  }


  // editProduct(product){
  //   this._dataService.updateProduct(product)
  //   .then(data => {
  //     if(data.error){
  //       console.log('update error')
  //     }
  //     else{
  //       console.log(this.ProductList)
  //       console.log(product)
  //       this._dataService.retrieveProducts()
  //       .then(data => this.ProductList = data.results)
  //       console.log(this._dataService.retrieveProducts()); 
  //       this._router.navigateByUrl('/products')
  //     }
  //   })
   
  //   this._router.navigate(['/success'])
    
  // }

  onSubmit(id)
    {
      this._dataService.updateProduct(id)
      .then(data => {
        this._dataService.retrieveProducts()
        
       })
  this._router.navigate(['/products'])
    }
  }
