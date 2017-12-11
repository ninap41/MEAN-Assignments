import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map'
import 'rxjs/add/operator/toPromise'


@Injectable()
export class WeatherService {
destinations : string[]= [];
constructor(private _http: Http,) { }

  getWeather(city){
    return this._http.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=3c0ce8c64a863d6cf11d1c5b95666c7e`)
    .map(data => data.json())
    .toPromise();
  }

  // retrieveDestiny(): string[] {
  //   return this.destinations;
  // }
}
