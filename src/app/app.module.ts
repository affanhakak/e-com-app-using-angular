import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ProductListComponent } from './Home/products/product-list.component';
import { StarComponent } from './Shared/star.component';
import { ProductDetailsComponent } from './Home/products/product-details.component';

import { ProductService } from './Home/products/product.service';
import { ConvertToSpacesPipe } from './Shared/convert-to-spaces.pipe';
import { ProductDetailGuard } from './products/product-detail.guard';
import { LowerCasePipe } from '@angular/common';
import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ConvertToSpacesPipe,
    StarComponent,
    ProductDetailsComponent,
    ConvertToSpacesPipe,
    CartComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: 'products', component: ProductListComponent },
      {
        path: 'products/:id',
        canActivate: [ProductDetailGuard],
        component: ProductDetailsComponent,
      },
      { path: 'cart', component: CartComponent },

      { path: '', redirectTo: 'products', pathMatch: 'full' },
      { path: '**', redirectTo: 'products', pathMatch: 'full' },
    ]),
  ],
  providers: [ProductService],
  bootstrap: [AppComponent],
})
export class AppModule {}
