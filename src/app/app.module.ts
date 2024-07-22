import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListingModule } from './features/product-listing/product-listing.module';
import { LoginComponent } from './core/auth/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UserAuthService } from './core/auth/services/user-auth.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthinterceptorsService } from './core/auth/services/authinterceptors.service';
import { SignupComponent } from './core/auth/signup/signup.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProductListingModule,
    ReactiveFormsModule
  ],
  providers: [ UserAuthService, 
    { provide: HTTP_INTERCEPTORS, useClass: AuthinterceptorsService, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
