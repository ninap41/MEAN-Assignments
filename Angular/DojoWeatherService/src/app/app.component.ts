import { Component, Output, Input, EventEmitter} from '@angular/core';
import { WeatherService } from './weather.service';

import { AppRoutingModule } from './app-routing.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Dojo Weather Service';

  constructor(private _dataService: WeatherService) {}



  

}
