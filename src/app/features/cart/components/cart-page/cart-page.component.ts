import { Component, OnInit } from '@angular/core';
import { ICartItem } from '../../models/cart.model';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrl: './cart-page.component.scss',
})
export class CartPageComponent {
  // cart!: ICartItem[];
  // receiveCart(cart: ICartItem[]) {
  //   this.cart = cart;
  //   console.log('Array received from child:', this.cart);
  // }
  // addCart() {
  //   if (!this.cart || this.cart.length === 0) {
  //     console.log('Cart is empty');
  //     return;
  //   }
  //   let products = this.cart.map((item) => {
  //     return { productId: item.product.id, quantity: item.quantity };
  //   });
  //   let Model = {
  //     userId: 5,
  //     date: new Date(),
  //     products: products,
  //   };
  //   console.log(Model);
  // }
}
