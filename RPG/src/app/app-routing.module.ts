import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';

import { FirstComponent } from './first/first.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomepageComponent },
 
  { path: 'firstWorld', pathMatch: 'full', component: FirstComponent},


];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

