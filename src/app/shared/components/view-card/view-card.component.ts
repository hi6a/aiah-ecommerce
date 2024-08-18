import { Component, Input } from '@angular/core';
import { Product } from '../../../features/product-listing/models/products.model';
import { CartService } from '../../../features/cart/services/cart.service';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DiscountPipe } from '../../pipes/discount.pipe';

@Component({
  selector: 'app-view-card',
  templateUrl: './view-card.component.html',
  styleUrl: './view-card.component.scss',
  standalone: true,
  imports: [MatIconModule, CommonModule, RouterModule, DiscountPipe],
})
export class ViewCardComponent {
  @Input() productData!: Product;

  constructor(private cartService: CartService) {}

  add() {
    this.cartService.addProduct(this.productData);
  }
}
