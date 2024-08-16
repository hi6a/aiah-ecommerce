import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/products.model';
import { ProductsApiService } from '../../services/products/products-api.service';
import { CategoriesService } from '../../services/categories/categories.service';
import { SortService } from '../../services/products/sort.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent implements OnInit {
  originalProductList: Product[] = [];
  productList!: Product[];
  searchlist!: Product[];
  searchValue = '';
  categories!: string[];
  currentCategory = 'All';
  sortOptions: string[] = [
    'Ascending',
    'Descending',
    'Price Ascending',
    'Price Descending',
    'Rate Ascending',
    'Rate Descending',
  ];
  currentSort = 'Default';

  constructor(
    private productsService: ProductsApiService,
    private cat: CategoriesService,
    private sortService: SortService
  ) {}

  ngOnInit(): void {
    // this.displayProducts(),

    this.displayCategories(),
      this.productsService.getAllProducts().subscribe({
        next: (products: Product[]) => {
          this.originalProductList = products;
          this.productList = this.originalProductList;
          this.searchlist = this.productList;
        },

        error: (err: any) => {
          alert(err.message);
        },
      });
  }

  displayCategories() {
    this.cat.getAllCategories().subscribe({
      next: (categories: string[]) => {
        this.categories = categories;
      },
      error: (err: any) => {
        alert(err.message);
      },
    });
  }

  onCategoryChange(event: any) {
    let value = event.target.value;

    if (value === 'All') {
      if (this.searchValue === '') this.productList = this.originalProductList;
      else {
        //get getAllproducts - products that dont have searchvalue in them
        this.productList = this.originalProductList.filter((product) =>
          product.title.toLowerCase().includes(this.searchValue.toLowerCase())
        );
      }
      this.sortService.sort(this.currentSort, this.productList);
      //currentsearch list is the category list :)
      this.searchlist = [...this.originalProductList];
      // console.log(
      //     'search list from change Cat to All: ',
      //     this.searchlist
      // );
    } else {
      let productsByCategory: Product[];
      this.cat.getProductsByCategory(value).subscribe((res: Product[]) => {
        //products inside res tht have the search value in their title. (if search value is not empty)
        productsByCategory = res;
        this.productList = productsByCategory.filter((product) =>
          product.title.toLowerCase().includes(this.searchValue.toLowerCase())
        );
        this.sortService.sort(this.currentSort, this.productList);
        this.searchlist = [...productsByCategory];
        // console.log(
        //     'search list from change Cat to else: ',
        //     this.searchlist
        // );
        this.currentCategory = value;
      });
    }
  }

  onSortChange(event: any) {
    this.currentSort = event.target.value;
    this.sortService.sort(this.currentSort, this.productList);
    this.searchlist = [...this.productList];
  }

  onSearch() {
    if (this.searchValue !== '') {
      this.productList = this.searchlist.filter((product) =>
        product.title.toLowerCase().includes(this.searchValue.toLowerCase())
      );
    } else {
      this.productList = this.searchlist;
    }

    // console.log('search value: ', this.searchValue);
    // console.log('search list from onSearch: ', this.searchlist);
  }

  onClear() {
    this.searchValue = '';
    this.productList = this.searchlist;
  }
}
