import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsApiService } from '../../services/products-api.service';
import { Product } from '../../models/products.model';
import { CartService } from '../../../cart/services/cart.service';
import { NewProductsService } from '../../../../shared/services/new-products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss',
})
export class ProductDetailsComponent implements OnInit {
  id!: any;
  product!: Product;
  stars!: number[];
  remaining!: number[];
  isHalf: boolean = false;
  constructor(
    private activeRoute: ActivatedRoute,
    private productsService: ProductsApiService,
    private cartService: CartService,
    private aiah: NewProductsService
  ) {
    this.id = this.activeRoute.snapshot.paramMap.get('id');
    console.log(this.id);
  }

  ngOnInit(): void {
    if (this.id > 20) {
      this.getAiahProduct();
    } else this.getProduct();
  }

  getAiahProduct() {
    this.aiah.getAiahById(Number(this.id)).subscribe((product) => {
      if (product) {
        this.product = product;
        this.getRating(this.product.rating.rate);
        console.log('Found product:', product);
      } else {
        console.log('Product not found.');
      }
    });
  }
  getProduct() {
    this.productsService.getProductById(this.id).subscribe({
      next: (res: Product) => {
        this.product = res;
        console.log('from get single: ', this.product);
        this.getRating(this.product.rating.rate);
      },

      error: (err: any) => {
        alert(err.message);
      },
    });
  }

  getRating(rating: number) {
    if (rating % 1 !== 0) {
      this.isHalf = true;
    }
    this.stars = Array.from({ length: Math.floor(rating) }, (_, i) => i + 1);
    if (this.isHalf) {
      this.remaining = Array.from(
        { length: 4 - Math.floor(rating) },
        (_, i) => i + 1
      );
    } else {
      this.remaining = Array.from(
        { length: 5 - Math.floor(rating) },
        (_, i) => i + 1
      );
    }
  }
  add() {
    this.cartService.addProduct(this.product);
  }
}
