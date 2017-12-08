import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Product } from '../product';  //INPUT MODEL



@Component({
  selector: 'app-editproduct',
  templateUrl: './editproduct.component.html',
  styleUrls: ['./editproduct.component.css']
})
export class EditproductComponent implements OnInit {

  newProduct = new Product();
  ProductList : any = [];
  valid= false;
  list = [];
  constructor(private _dataService: DataService) { }
  
    ngOnInit() {
      this.ProductList = this._dataService.retrieveProducts(); //redfeingint he empty var at the top with our DATA
      // this.log = this._dataService.retrieveLog(); //redfeingint he empty var at the top with our DATA
    
  }

}
