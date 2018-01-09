import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Product } from '../product';  //INPUT MODEL
import { User } from '../user';  
import { Router } from '@angular/router'
import { RouterModule, Routes } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Score } from '../score'; 
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

newScore = new Score();

// questionformScore = 
// {
//   user: '',
//   question1: '',
//   question2: '',
//   question3: '',
//   score: '',
//   percentage: ''
// }
message = ''
RandomProduct: Product;
RandomProduct2: Product;
RandomProduct3: Product;
valid;
  
// newProduct = new Product();
ProductList= [];
currentUser;
loggedList=[]
  constructor(
    private _dataService: DataService,
    private _router: Router,
    private _route: ActivatedRoute)
  {

    _dataService.findRandomProduct()
    .then((product) => { 
      this.RandomProduct = product.random1;
      this.RandomProduct2 = product.random2;
      this.RandomProduct3 = product.random3;
   })
    .catch((err) => { console.log(err); });




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
   
        this._dataService.retrieveProducts()
        .then(data => this.ProductList = data.results)
        this._router.navigateByUrl('/products')
      }
    })
   
    this._router.navigate(['/success'])
    
  }

  onSubmit(){
    console.log("ONSUBMIT" + this.loggedList[0])
    this._dataService.createScore(this.newScore)
    // console.log(this.newScore)
        .then(data => this._router.navigateByUrl('/startgame'));
        this._router.navigateByUrl('/startgame')
        .then(data => {

        })
      
      }

  


  
}