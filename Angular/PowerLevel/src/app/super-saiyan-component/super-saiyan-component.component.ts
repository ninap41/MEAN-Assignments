import { Component, OnInit,  Input, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-super-saiyan-component',
  templateUrl: './super-saiyan-component.component.html',
  styleUrls: ['./super-saiyan-component.component.css']
})
export class SuperSaiyanComponentComponent implements OnInit {
@Input() SuperSaiyanPower;
  constructor() { }

  ngOnInit() {
  }

}
