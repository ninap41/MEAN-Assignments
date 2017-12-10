import { Injectable } from '@angular/core';
import { Http } from '@angular/http'; //Other Client Module?
import { HttpClient} from '@angular/common/http'; //Client Module
import 'rxjs/add/operator/map';    //RXJS operator Reactive. Same as Observable
import 'rxjs/add/operator/toPromise'; //eventual result of an asynchronous operation "TOPROMISE".
import { Product } from './product'; 
import { User } from './user';  


@Injectable()
export class DataService {
  

Product: string = null;
ProductList: any[] = [];
currentUser:  User;

 constructor(private _http: Http) {
  }


//new stuff
 createUser(user){
  return this._http.post('/api/register', user)
  .map(response => response.json())
  .toPromise();
}

SessEm(user: User){
  if(user != null){
    this.currentUser;
    this.currentUser.firstName = user.firstName
    console.log(user.firstName);
    return this.currentUser
    }
  }


// findUser(email){
//   return this._http.get('/api/login', email)
//   .map(response => response.json())
//   .toPromise();
// }

returnUser(): any{
  return this.currentUser
}

LogOut(user: any)
{
  return this.currentUser = null;
}

// retrieveSingleProduct(event, idx): string{
  //   return this.Product;
// }

retrieveProducts(){
    return this._http.get('api/allProducts')
    .map(response => response.json())
    .toPromise();
  }

  createProduct(product: Product){
    return this._http.post('/api/addProduct', product)
    .map(response => response.json())
    .toPromise();
    //previously a local list now DB
    //return this.ProductList.push(product);
}


removeProduct(product){
  return this._http.post('/api/deleteProduct', product)
  .map(response => response.json())
  .toPromise();
}


  logOutSES(){

  }

}
