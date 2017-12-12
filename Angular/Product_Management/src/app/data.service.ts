import { Injectable } from '@angular/core';
import { Http } from '@angular/http'; //Other Client Module?
import { HttpClient} from '@angular/common/http'; //Client Module
import 'rxjs/add/operator/map';    //RXJS operator Reactive. Same as Observable
import 'rxjs/add/operator/toPromise'; //eventual result of an asynchronous operation "TOPROMISE".
import { Product } from './product';  //INPUT MODEL

@Injectable()
export class DataService {
 
 ProductList: any[] = [];
updatedProduct: Product;
  constructor() { }

  retrieveSingleProduct(idx): Product{
    return this.ProductList[idx];
  }

  retrieveProducts():  Array<string>{
    return this.ProductList;
  }

  createProduct(product: any):  any
  {
    return this.ProductList.push(product);

  }

  updateProduct(index, product){
    
    this.ProductList.splice(index, 1)
    return this.ProductList.push(product);
    
  }
}
