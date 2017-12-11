import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { EditproductComponent } from './editproduct/editproduct.component';
import { CreateproductComponent } from './createproduct/createproduct.component';
import { ProductsComponent } from './products/products.component';


const routes: Routes = [
  {path: '', component: HomepageComponent, pathMatch: 'full' },
  { path: 'products', component: ProductsComponent, children:
  [
    {path: '', redirectTo: 'products/product._id' , pathMatch: 'full'},
    {path: 'products/:id', component: EditproductComponent}
  ]
  },
  
  { path: 'success', component: ProductsComponent},
  { path: 'createproduct', component: CreateproductComponent },
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

