import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Product } from '../product';  //INPUT MODEL
import { Router } from '@angular/router'


@Component({
  selector: 'app-editproduct',
  templateUrl: './editproduct.component.html',
  styleUrls: ['./editproduct.component.css']
})
export class EditproductComponent implements OnInit {

  newProduct = new Product();
  valid= false;
  list = [];
  currentUser=[];
  constructor(private _dataService: DataService,
    private _router: Router) { }
    ngOnInit() {
      this.currentUser= this._dataService.returnUser();      
      
  }

}
