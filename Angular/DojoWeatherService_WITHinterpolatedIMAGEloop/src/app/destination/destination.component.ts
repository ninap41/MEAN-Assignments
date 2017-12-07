import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { WeatherService } from '../weather.service';
// import { AppRoutingModule } from './app-routing.module';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-destination',
  templateUrl: './destination.component.html',
  styleUrls: ['./destination.component.css']
})
export class DestinationComponent implements OnInit {
 
  city = '';
  ImagePath = null;
 CityList= ['Chicago','Burbank','Dallas','Seattle','Washington']

  weather = []; //list 
  avg : number = null;
  high : number = null;
  low : number = null;
status : any = null;
humidity : any = null;
destinations: Array<string> = [];
  constructor(private _dataService: WeatherService,
  private _route: ActivatedRoute) 
  { //CONSTRUCTOR
    this._route.paramMap.subscribe( params => {
      this.ImagePath = `/assets/images/${this.city}.jpg`
 
      this.city = params.get('city');
      this._dataService.getWeather(params.get('city'))

            .then(data => {
              this.weather = data;
              this.humidity = data.main.humidity;
              this.status = data['weather'][0]['description']
              this.avg = Math.floor(data.main.temp * 9/5 - 459.67);
              this.high = Math.floor(data.main.temp_max * 9/5 - 459.67);
              this.low = Math.floor(data.main.temp_min * 9/5 - 459.67);
            }) //data parens
 
          }) //route map parens

  } //CONSTRUCTOR
 

  ngOnInit() {

  }
}

