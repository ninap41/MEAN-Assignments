import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { EditproductComponent } from './editproduct/editproduct.component';
import { CreateproductComponent } from './createproduct/createproduct.component';
import { ProductsComponent } from './products/products.component';
import { YourproductsComponent } from './yourproducts/yourproducts.component';
import { ViewproductComponent } from './viewproduct/viewproduct.component';
import { StartproductgameComponent } from './startproductgame/startproductgame.component';


const routes: Routes = [
  {path: '', component: HomepageComponent, pathMatch: 'full' },
  {path: 'home', component: HomepageComponent, pathMatch: 'full' },
  { path: 'products', component: ProductsComponent},
  {path: 'viewproduct/:id', component: ViewproductComponent},
  {path: 'startgame', component: StartproductgameComponent},
  
  {path: 'products/:id/:index', component: EditproductComponent},


  
  { path: 'success', component: ProductsComponent},
  { path: 'createproduct', component: CreateproductComponent },
  { path: 'yourproducts', component: YourproductsComponent },
  { path: 'editproduct', component: EditproductComponent },

  //NEW STUFF
  { path: 'login', component: HomepageComponent},
  { path: 'register', component: HomepageComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

