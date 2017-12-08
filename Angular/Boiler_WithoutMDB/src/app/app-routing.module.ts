import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { EditproductComponent } from './editproduct/editproduct.component';
import { CreateproductComponent } from './createproduct/createproduct.component';
import { ProductsComponent } from './products/products.component';


const routes: Routes = [
  { path: '', 
  pathMatch: 'full',
  component: HomepageComponent },
  { path: 'products', 
  pathMatch: 'full',
  component: ProductsComponent },
  { path: 'createproduct', 
  pathMatch: 'full',
  component: CreateproductComponent },
  { path: 'editproduct', 
  pathMatch: 'full',
  component: EditproductComponent },
  // { path: 'products', 
  // component: AppComponent, 
  // children: [
  //   { path: 'new', component: AppComponent}
  // ]
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

