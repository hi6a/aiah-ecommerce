import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../models/products.model';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss',
})
export class ProductCardComponent {
  @Input() productData!: Product;
  @Output() product = new EventEmitter();
  quantity: number = 1;

  add() {
    this.product.emit({ product: this.productData, quantity: this.quantity });
    // console.log('clicked button in card');
  }
}
