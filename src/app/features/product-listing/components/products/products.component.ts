import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/products.model';
import { ProductsApiService } from '../../services/products/products-api.service';
import { FilterByCategoryService } from '../../services/filter/filter-by-category.service';
import { CategoriesService } from '../../services/filter/categories.service';
import { SortService } from '../../services/sort/sort.service';
import { UpdateSortService } from '../../services/sort/update-sort.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
  export class ProductsComponent implements OnInit{

  searchValue='';
  productList!: Product[];
  categories!: string[];
  sortOptions: string[]=['Default','Ascending','Descending',
                        'Price Ascending','Price Descending',
                        'Rate Ascending','Rate Descending'];
  currentSort= 'Default';


  constructor(private pService: ProductsApiService,
              private cat: CategoriesService,
              private sort :SortService,
              private checkSorting: UpdateSortService
             
  ){}
  
  ngOnInit(): void {
     this.displayProducts(),
     this.displayCategories(),
     console.log("current sort: ",this.currentSort);
  }

  displayProducts(){
    this.pService.getAllProducts().subscribe({
      next: (products: Product[])=>{
      this.productList = products;
      this.searchValue ='';
      // console.log(this.productList);
    },

      error: (err:any) => {
        alert(err.message)
      }})}

      


  displayCategories(){
    this.cat.getAllCategories().subscribe({
      next: (categories: string[])=>{
      this.categories = categories;
      // console.log(this.categories);,
      },
      error: (err:any) => {
        alert(err.message)
      }})}


      onCategoryChange(event:any){
    let value = event.target.value;
    if(value ==="All")
    this.displayProducts();
      else {
      this.cat.getProductsByCatName(value).subscribe(( res:Product[]) =>{
      this.productList = res;
      this.checkSorting.sort(this.currentSort,this.productList)
      console.log("after filter change: ",this.productList);
      console.log("check currentSort again: ", this.currentSort)
      })
     
  }

  
  }

  onSortChange(event:any){
    this.currentSort = event.target.value;
    this.checkSorting.sort(this.currentSort,this.productList)
    console.log("after sorting change: ",this.currentSort);
  }

  onSearch(){
      if(this.searchValue!=''){
      this.pService.getAllProducts().subscribe((products: Product[])=>{
        this.productList = products.filter(product=>
          product.title.toLowerCase().includes(this.searchValue.toLowerCase())
        )
      })
  }
console.log(this.searchValue)
}


  }



