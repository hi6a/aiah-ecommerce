import { Component } from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart-grid',
  templateUrl: './cart-grid.component.html',
  styleUrl: './cart-grid.component.scss',
})
export class CartGridComponent {
  constructor(public cartService: CartService) {}

  onDec(i: number) {
    this.cartService.decQuantity(i);
  }

  onInc(i: number) {
    this.cartService.incQuantity(i);
  }

  onRemove(i: number) {
    this.cartService.removeItem(i);
  }

  onClear() {
    this.cartService.clearCart();
  }

  onOrder() {
    this.cartService.placeOrder();
  }
}
