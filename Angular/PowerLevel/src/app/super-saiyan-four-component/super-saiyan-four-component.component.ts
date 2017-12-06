import { Component, OnInit,  Input, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-super-saiyan-four-component',
  templateUrl: './super-saiyan-four-component.component.html',
  styleUrls: ['./super-saiyan-four-component.component.css']
})
export class SuperSaiyanFourComponentComponent implements OnInit {
@Input() SuperSaiyanFourPower;
  constructor() { }

  ngOnInit() {
  }

}
