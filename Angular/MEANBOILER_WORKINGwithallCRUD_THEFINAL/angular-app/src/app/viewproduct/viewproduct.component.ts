import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Product } from '../product';  //INPUT MODEL
import { User } from '../user';  
import { Router } from '@angular/router'
import { RouterModule, Routes } from '@angular/router';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-viewproduct',
  templateUrl: './viewproduct.component.html',
  styleUrls: ['./viewproduct.component.css']
})
export class ViewproductComponent implements OnInit {

  ProductList=[]
  singleProduct = {}
  constructor(
    private _dataService: DataService,
    private _router: Router,
    private _route: ActivatedRoute

  ) { }

  ngOnInit() {
    this.ProductList = this._dataService.ProductList
    this._dataService.retrieveProducts()
    .then(data => this.ProductList = data.results)


    this._route.paramMap.subscribe( params => {
      this._dataService.retrievedSingleProduct({'id': params.get('id')})
      .then(data => this.singleProduct = data)
      .catch(err => console.log(err))



    })

  }

}
