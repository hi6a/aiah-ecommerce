import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './features/product-listing/components/products/products.component';
import { LoginComponent } from './core/auth/login/login.component';
import { authGuard } from './core/auth/auth.guard';
import { SignupComponent } from './core/auth/signup/signup.component';

const routes: Routes = [
  {path: '', redirectTo:'products', pathMatch:'full'},
  {path: 'login', component:LoginComponent},
  {path: 'signup', component:SignupComponent},
  {path: 'products', component:ProductsComponent, canActivate: [authGuard]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
