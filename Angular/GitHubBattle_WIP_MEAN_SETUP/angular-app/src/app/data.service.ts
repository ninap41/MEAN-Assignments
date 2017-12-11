import { Injectable } from '@angular/core';
import { Http } from '@angular/http'; //Other Client Module?
import { HttpClient} from '@angular/common/http'; //Client Module
import 'rxjs/add/operator/map';    //RXJS operator Reactive. Same as Observable
import 'rxjs/add/operator/toPromise'; //eventual result of an asynchronous operation "TOPROMISE".
import { User } from './user';  
import { Battle } from './battle';  



@Injectable()
export class DataService {
  

Product: string = null;
ProductList: any[] = [];
currentUser:  User;

 constructor(private http: Http) {}




retrieveBattles(){
    return this.http.get('api/allBattles')
    .map(response => response.json())
    .toPromise();
  }

  createBattle(){
    return this.http.get('api/createBattles')
    .map(response => response.json())
    .toPromise();
  }




 getUser(username: string) { // Takes in One Field from Form
  return this.http.get(`https://api.github.com/users/${ username }`) //plugs the parameter right in the URL and returns
    .map(response => response.json()).toPromise(); // operator map then converts the Json Data

    }
    


// retrieveBattles(){
//     return this._http.get('api/allBattles')
//     .map(response => response.json())
//     .toPromise();
//   }

//   createBattle(battle: Battle){
//     return this._http.post('/api/addProduct', battle)
//     .map(response => response.json())
//     .toPromise();
//     //previously a local list now DB
//     //return this.ProductList.push(battle);
// }

// removeProduct(battle){
//   return this._http.post('/api/deleteProduct', battle)
//   .map(response => response.json())
//   .toPromise();
// }


  }
