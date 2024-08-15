import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';

import { ICartItem } from '../../models/cart.model';
import { MatTable } from '@angular/material/table';
import { CartApiService } from '../../services/cart-api.service';

@Component({
  selector: 'app-cart-table',
  templateUrl: './cart-table.component.html',
  styleUrl: './cart-table.component.scss',
})
export class CartTableComponent implements OnInit {
  onOrder: boolean = false;
  displayedColumns: string[] = ['Product', 'Quantity', 'Price', 'Delete'];
  cartProducts!: ICartItem[];
  @ViewChild('table')
  table!: MatTable<Element>;
  // @Output() arrayEmitter = new EventEmitter<ICartItem[]>();
  constructor(private cartService: CartApiService) {}
  ngOnInit(): void {
    this.getCartProducts();
  }
  getCartProducts() {
    if ('cart' in localStorage) {
      this.cartProducts = JSON.parse(localStorage.getItem('cart')!);
    }
    console.log('cart products ', this.cartProducts);
  }

  decQuantity(index: number) {
    console.log('index; ', index);
    if (this.cartProducts[index].quantity === 1) {
      this.cartProducts[index].quantity--;
      this.cartProducts.splice(index, 1);
      console.log('cart after decrementing: ', this.cartProducts);
      localStorage.setItem('cart', JSON.stringify(this.cartProducts));
      this.table.renderRows();
      // remove item from cart
    } else {
      this.cartProducts[index].quantity--;
      localStorage.setItem('cart', JSON.stringify(this.cartProducts));
    }
  }
  incQuantity(index: number) {
    console.log('index; ', index);
    if (
      this.cartProducts[index].quantity ===
      this.cartProducts[index].product.rating.count
    ) {
      alert(this.cartProducts[index].product.title + ' is out of stock!');
    } else {
      this.cartProducts[index].quantity++;
      localStorage.setItem('cart', JSON.stringify(this.cartProducts));
      this.table.renderRows();
    }
  }

  deleteProduct(index: number) {
    this.cartProducts[index].quantity = 0;
    this.cartProducts.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(this.cartProducts));
    this.table.renderRows();
  }

  clearCart() {
    this.cartProducts = [];
    localStorage.setItem('cart', JSON.stringify(this.cartProducts));
    this.table.renderRows();
    alert('Cart is empty :(');
  }
  /** Gets the total cost of all transactions. */
  getTotalCost() {
    return this.cartProducts
      .map((t) => t.product.price * t.quantity)
      .reduce((acc, value) => acc + value, 0);
  }

  // sendCarttoParent() {
  //   this.arrayEmitter.emit(this.cartProducts);
  // }
  orderNow() {
    let products = this.cartProducts.map((item) => {
      return { productId: item.product.id, quantity: item.quantity };
    });
    let Model = {
      userId: 5,
      date: new Date(),
      products: products,
    };
    this.cartService.sendCart(Model).subscribe((res) => {
      this.onOrder = true;
      console.log('ordered boolean: ', this.onOrder);
      this.cartProducts = [];
      localStorage.setItem('cart', JSON.stringify(this.cartProducts));
      this.table.renderRows();
      alert('Your order has been successfully sent!');
    });
    console.log(Model);
  }
}
