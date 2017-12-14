import { Injectable } from '@angular/core';
import { Http } from '@angular/http'; //Other Client Module?
import { HttpClient} from '@angular/common/http'; //Client Module
import 'rxjs/add/operator/map';    //RXJS operator Reactive. Same as Observable
import 'rxjs/add/operator/toPromise'; //eventual result of an asynchronous operation "TOPROMISE".
import { Product } from './product'; 



@Injectable()
export class DataService {
  

Product: string = null;
ProductList: any[] = [];

 constructor(private _http: Http) {
 
  }



retrieveProducts(){
    return this._http.get('api/allProducts')
    .map(response => response.json())
    .toPromise();
  }

  createProduct(product: Product){
    return this._http.post('/api/addProduct', product)
    .map(response => response.json())
    .toPromise();
   

}

removeProduct(product){
  return this._http.post('/api/deleteProduct', product)
  .map(response => response.json())
  .toPromise();
}


  logOutSES(){

  }

}
