import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './features/product-listing/components/products/products.component';
import { authGuard } from './core/auth/services/auth.guard';
import { HomeComponent } from './features/home-page/components/home/home.component';
import { ProductDetailsComponent } from './features/product-listing/components/product-details/product-details.component';

const routes: Routes = [
  {
    path: 'products',
    component: ProductsComponent,
    canActivate: [authGuard],
  },
  {
    path: 'products/details/:id',
    component: ProductDetailsComponent,
    canActivate: [authGuard],
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./core/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'cart',
    loadChildren: () =>
      import('./features/cart/cart.module').then((m) => m.CartModule),
    canActivate: [authGuard],
  },
  { path: '', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
