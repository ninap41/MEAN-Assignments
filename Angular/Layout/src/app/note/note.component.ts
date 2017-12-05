import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {

  notes = [
    {title: 'first note'},
    {title:'second note'}
  ]

  invoke(event){
    event = this.notes.push(event);
    console.log("invoked", event);
  }

  delete(event2){
    event2 = this.notes.pop();
  }

  constructor() { }

  ngOnInit() {
  }

}
