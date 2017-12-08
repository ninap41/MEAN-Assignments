import { Injectable } from '@angular/core';
import { Http } from '@angular/http'; //Other Client Module?
import { HttpClient} from '@angular/common/http'; //Client Module
import 'rxjs/add/operator/map';    //RXJS operator Reactive. Same as Observable
import 'rxjs/add/operator/toPromise'; //eventual result of an asynchronous operation "TOPROMISE".

@Injectable()
export class DataService {
  Product: string = null;
 ProductList: any[] = [];

  constructor() { }

  retrieveSingleProduct(event, idx): string{
    return this.Product;
  }

  retrieveProducts():  Array<string>{
    return this.ProductList;
  }

  createProduct(product: any):  any
  {
    return this.ProductList.push(product);

  }

}
