import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { CartRoutingModule } from './cart-routing.module';
import { CurrencyPipe } from '@angular/common';
import { CartPageComponent } from './components/cart-page/cart-page.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CartGridComponent } from './components/cart-grid/cart-grid.component';
import { MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [CartPageComponent, CartGridComponent],
  imports: [
    CommonModule,
    CartRoutingModule,
    MatTableModule,
    CurrencyPipe,
    MatIconModule,
    MatButtonModule,
    MatListModule,
  ],
})
export class CartModule {
  constructor() {
    console.log('loaded module cart');
  }
}
