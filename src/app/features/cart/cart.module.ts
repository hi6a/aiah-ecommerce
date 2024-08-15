import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { CartRoutingModule } from './cart-routing.module';
import { CurrencyPipe } from '@angular/common';
import { CartTableComponent } from './components/cart-table/cart-table.component';
import { CartPageComponent } from './components/cart-page/cart-page.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [CartTableComponent, CartPageComponent],
  imports: [
    CommonModule,
    CartRoutingModule,
    MatTableModule,
    CurrencyPipe,
    MatIconModule,
    MatButtonModule,
  ],
})
export class CartModule {
  constructor() {
    console.log('loaded module cart');
  }
}
