import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Product } from '../product';  //INPUT MODEL


@Component({
  selector: 'app-createproduct',
  templateUrl: './createproduct.component.html',
  styleUrls: ['./createproduct.component.css']
})
export class CreateproductComponent implements OnInit {


 newProduct = new Product();
  valid= false;
  ImagePath = null;
ProductList : any =[]
  constructor(private _dataService: DataService) { 

  }
  
    ngOnInit() {
    this.ProductList = this._dataService.retrieveProducts(); //redfeingint he empty var at the top with our DATA
    // this.log = this._dataService.retrieveLog(); //redfeingint he empty var at the top with our DATA
    this.valid= false;
    this.ImagePath = `${this.newProduct[2]}`
  }

  onSubmit(product){

    this.valid = true;
    product = this.newProduct;
    this.ProductList.push(this.newProduct);
    this.newProduct = new Product();
    console.log(this.newProduct)
    // this._dataService.createProduct(this.newProduct);
  
  }
}
