import { Component, OnInit, Input,Output,  EventEmitter } from '@angular/core';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.css']
})
export class NoteListComponent implements OnInit {
@Input() myNotes;
@Output() deleteEvent= new EventEmitter();
@Output() myEvent = new EventEmitter();


nameslist = ["dan","Jack", "Jill"]
NotesList = this.myNotes;


  constructor() { }

  callParent(){
    this.myEvent.emit(this.nameslist[Math.floor(Math.random() * 3)]);
  }
  
 

  ngOnInit() {
  }

}
