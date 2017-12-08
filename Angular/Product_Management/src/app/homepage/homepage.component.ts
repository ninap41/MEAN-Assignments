import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Product } from '../product';  //INPUT MODEL


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
ProductList : any = [];
  constructor(private _dataService: DataService)
  {
    this.ProductList = this._dataService.retrieveProducts(); //redfeingint he empty var at the top with our DATA
    
 }
 

  ngOnInit() {
  }

}
