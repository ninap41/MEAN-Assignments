import { Injectable } from '@angular/core';
import { Http } from '@angular/http'; //Other Client Module?
import { HttpClient} from '@angular/common/http'; //Client Module
import 'rxjs/add/operator/map';    //RXJS operator Reactive. Same as Observable
import 'rxjs/add/operator/toPromise'; //eventual result of an asynchronous operation "TOPROMISE".
import { Product } from './product'; 
import { User } from './user';  
import { Score } from './score'; 

@Injectable()
export class DataService {
  

Product: Product;
ProductList: any[] = [];
loggedList= []
retrievedProduct=[]
currentUser: User;
message = []

 constructor(private _http: Http) 
 {
  
  }
  
 createUser(user){
  return this._http.post('/api/register', user)
  .map(response => response.json())
  .toPromise();
}


/////////////////////////////////

SessEm(User){ //had as user object before
  // this.currentUser.firstName = User.firstName
  // this.currentUser.id = User.id
  // this.currentUser.email = User.email
  // console.log(this.currentUser + "~~~~~~~~~~~~~~~~~~~~~~~~~~~~")
  // console.log(User)
  // this.loggedList.push(User)
  this.loggedList.push(User)
  return this.loggedList
  }

retrieveLogged(){
  return this.loggedList
}
/////////////////////////////////


LogOut(user: any)
{
  let userguy =  this.loggedList[user];
  this.loggedList.splice(user, 1)
  return this._http.get('api/logout', userguy)
  .map(response => response.json())
  .toPromise();
}

// findUser(email){
//   return this._http.get('/api/login', email)
//   .map(response => response.json())
//   .toPromise();
// }

retrieveUsers(){
  return this._http.get('api/allUsers')
  .map(response => response.json())
  .toPromise();
}

retrieveScores(){
  return this._http.get('api/allScores')
  .map(response => response.json())
  .toPromise();
}

loginUser(user): any{
  return this._http.post('/api/login', user)
  .map(response => response.json())
  .toPromise();
}

retrieveProducts(){
    return this._http.get('api/allProducts')
    .map(response => response.json())
    .toPromise();
  }

//   createProduct(product: Product){
//     return this._http.post('/api/addProduct', product)
//     .map(response => response.json())
//     .toPromise();
// }

createProduct(product: Product){
  console.log("createproduct ON DATASERVICE")
  return this._http.post('/api/addProduct/user.id', product)
  .map(response => response.json())
  .toPromise();
}
createScore(score : Score){
  console.log("createscore ON DATASERVICE")
  return this._http.post('/api/add/score', score)
  .map(response => response.json())
  .toPromise();
}
// updateProduct(product){ //OBJECT
//   console.log(product)
//   return this._http.post('/api/updateProduct', product)
//   .map(response => response.json())
//   .toPromise();
// }


retrievedSingleProduct(id){
  return this._http.post('/api/retrieveSingleProduct/', id)
  .map(response => response.json())
  .toPromise();
}

// updateProduct1(product){ //OBJECT
//   console.log(product + "!!!! MADE IT TO SERVICE PRODUCT")
//   return this._http.post('/api/updateProduct1', product)
//   .map(response => response.json())
//   .toPromise();
// }
updateProduct(product){ //OBJECT
  console.log(product)
  return this._http.post('/api/updateProduct', product)
  .map(response => response.json())
  .toPromise();
}
removeProduct(product){
  return this._http.post('/api/deleteProduct', product)
  .map(response => response.json())
  .toPromise();
}

findRandomProduct(){
  return this._http.get('/api/randomProduct')
  .map(response => response.json())
  .toPromise();
}

// findProduct(id){
//   console.log(id)
//   return this._http.get(`/api/findproduct/updatedProduct/${id}`)
//   .map(response => response.json)
//   .toPromise();
// }

// findOneListing(id){
//   return this._http.get(`/api/currentUser/listing/${id}`)
//   .map(response => response.json())
//   .toPromise();
// }
// 

}
