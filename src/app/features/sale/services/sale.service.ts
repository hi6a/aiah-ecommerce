import { Injectable, OnInit, signal } from '@angular/core';
import { Product } from '../../product-listing/models/products.model';
import { ProductsApiService } from '../../product-listing/services/products-api.service';
import { forkJoin, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { NewProductsService } from '../../../shared/services/new-products.service';

@Injectable({
  providedIn: 'root',
})
export class SaleService {
  constructor(
    private productService: ProductsApiService,
    private http: HttpClient,
    private aiah: NewProductsService
  ) {
    this.loadSaleItems();
  }
  public saleItems = signal<Product[]>([]);
  saleIDs = [1, 4, 9, 16, 18];
  loadSaleItems(): void {
    const productObservable = this.saleIDs.map((id) =>
      this.productService.getProductById(id)
    );

    forkJoin(productObservable).subscribe((products) => {
      this.saleItems.set(products);
      // console.log('sale items: ', this.saleItems());
    });
  }
}
