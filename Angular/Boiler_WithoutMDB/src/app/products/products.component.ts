import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Product } from '../product';  //INPUT MODEL


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

// newProduct = new Product();
ProductList : any =[]
  constructor(private _dataService: DataService)
  {
    this.ProductList = this._dataService.retrieveProducts(); //redfeingint he empty var at the top with our DATA
    // this.log = this._dataService.retrieveLog(); //redfeingint he empty var at the top with our DATA
  
 }

  ngOnInit() {
  }
  

}
