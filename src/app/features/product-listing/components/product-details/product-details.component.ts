import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsApiService } from '../../services/products/products-api.service';
import { Product } from '../../models/products.model';

@Component({
    selector: 'app-product-details',
    templateUrl: './product-details.component.html',
    styleUrl: './product-details.component.scss',
})
export class ProductDetailsComponent implements OnInit {
    id!: any;
    product!: Product;
    constructor(
        private activeRoute: ActivatedRoute,
        private productsService: ProductsApiService
    ) {
        this.id = this.activeRoute.snapshot.paramMap.get('id');
        console.log(this.id);
    }

    ngOnInit(): void {
        this.getProduct();
    }
    getProduct() {
        this.productsService.getProductById(this.id).subscribe({
            next: (res: Product) => {
                this.product = res;
                console.log('from get single: ', this.product);
            },

            error: (err: any) => {
                alert(err.message);
            },
        });
    }
}
