import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListingModule } from './features/product-listing/product-listing.module';



@NgModule({
  declarations: [
    AppComponent,
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProductListingModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
