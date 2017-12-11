import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { SuccessComponent } from './success/success.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: SuccessComponent },
  { path: 'success', pathMatch: 'full', component: SuccessComponent},
  { path: 'products', pathMatch: 'full', component: ProductsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

