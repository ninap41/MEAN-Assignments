import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Product } from '../product';  //INPUT MODEL

import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-editproduct',
  templateUrl: './editproduct.component.html',
  styleUrls: ['./editproduct.component.css']
})
export class EditproductComponent implements OnInit {

  newProduct: Product;

  index = '' 
  ProductList : any = [];
  valid= false;
  list = [];
  
  constructor(private _dataService: DataService, private _route: ActivatedRoute) { 

    this._route.paramMap.subscribe( params => {
      this.newProduct = this._dataService.retrieveSingleProduct(params.get('index'))
      this.index = params.get('index')
  })

}
    ngOnInit() {
      this.ProductList = this._dataService.retrieveProducts(); 
      this._route.paramMap.subscribe( params => {
        this.newProduct = this._dataService.retrieveSingleProduct(params.get('index'))
        this.index = params.get('index')
    })
  }


  onSubmit(){
    this.valid = true;
    this._dataService.updateProduct(this.index, this.newProduct)
   
    }
  }


