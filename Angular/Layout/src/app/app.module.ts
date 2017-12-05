import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- Import FormsModule
import { HttpModule } from '@angular/http'; 

import { AppComponent } from './app.component';
import { TaskComponent } from './task/task.component';

import { ServiceComponent } from './service/service.component';
import { NoteComponent } from './note/note.component';
import { NoteListComponent } from './note/note-list/note-list.component';

// imports: [ BrowserModule, FormsModule, HttpModule],       ///alt way to do all this.
// declarations: [ AppComponent, TaskComponent,ServiceComponent, NoteComponent,
// NoteListComponent],
// providers: [ ],
// bootstrap: [ AppComponent ]
//THE ALT WAY OF WHAT CAN GO IN YOUR nG MODULE


@NgModule({
 imports: [ BrowserModule, FormsModule, HttpModule],       ///alt way to do all this.
declarations: [ AppComponent, TaskComponent,ServiceComponent, NoteComponent,
NoteListComponent],
providers: [ ],
bootstrap: [ AppComponent ]
})
export class AppModule { }
