import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './features/product-listing/components/products/products.component';
import { LoginComponent } from './core/auth/login/login.component';
import { authGuard } from './core/auth/services/auth.guard';
import { SignupComponent } from './core/auth/signup/signup.component';
import { HomeComponent } from './features/home-page/home/home.component';
import { ShellComponent } from './core/app-shell/shell/shell.component';

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'products', component:ProductsComponent, canActivate: [authGuard]},
  {path: 'login', loadChildren: () => import('./core/auth/auth.module').then(m =>m.AuthModule)}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
