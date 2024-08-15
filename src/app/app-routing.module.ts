import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './features/product-listing/components/products/products.component';
import { authGuard } from './core/auth/services/auth.guard';
import { HomeComponent } from './features/home-page/home/home.component';
import { ProductDetailsComponent } from './features/product-listing/components/product-details/product-details.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'products',
    component: ProductsComponent,
    canActivate: [authGuard],
  },
  { path: 'products/details/:id', component: ProductDetailsComponent },
  {
    path: 'login',
    loadChildren: () =>
      import('./core/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'cart',
    loadChildren: () =>
      import('./features/cart/cart.module').then((m) => m.CartModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
