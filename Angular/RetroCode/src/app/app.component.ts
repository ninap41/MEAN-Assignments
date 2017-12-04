import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Retro Bar Code';
  colors = []

    getRandomColor(){
      var letters = '0123456789ABCDEF';
      var color = '#';
       for(var i = 0; i < 6; i++) {
         color += letters[Math.floor(Math.random() * 16)];
       }
       return color;
    }
    //W3 SCHOOLS THANKS
     
    ngOnInit() {
      for(let box=0; box<14; box++){
        this.colors[box] = this.getRandomColor();
      }
    }
}
