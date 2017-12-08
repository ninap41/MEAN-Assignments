import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { Product } from './product';  //INPUT MODEL


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PPM - Project Product Management';

  constructor(private _dataService: DataService)
  {
 }

 ngOnInit()
 {

 }
}
