import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartTableComponent } from './components/cart-table/cart-table.component';
import { CartPageComponent } from './components/cart-page/cart-page.component';

const routes: Routes = [{ path: '', component: CartPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CartRoutingModule {}
