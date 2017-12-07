import { Injectable } from '@angular/core';
import { Http } from '@angular/http'; //Other Client Module?
import { HttpClient} from '@angular/common/http'; //Client Module
//UGHHHHHHH

import 'rxjs/add/operator/map';    //RXJS operator Reactive. Same as Observable
import 'rxjs/add/operator/toPromise'; //eventual result of an asynchronous operation "TOPROMISE".
  
@Injectable()
export class DataService {

  constructor(private http: Http) { }  //Constrcuts the connection service
  
    getUser(username: string) { // Takes in One Field from Form
      return this.http.get(`https://api.github.com/users/${ username }`) //plugs the parameter right in the URL and returns
        .map(response => response.json()).toPromise(); // operator map then converts the Json Data
    }
}
