import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ProductListComponent } from './Home/products/product-list.component';
import { StarComponent } from './Shared/star.component';
import { ProductDetailsComponent } from './Home/products/product-details.component';
import { WelcomeComponent } from './Home/products/welcome-component';

import { ProductService } from './Home/products/product.service';
import { ConvertToSpacesPipe } from './Shared/convert-to-spaces.pipe';
import { ProductDetailGuard } from './products/product-detail.guard';
import { CartComponent } from './cart/cart.component';
import { LowerCasePipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ConvertToSpacesPipe,
    StarComponent,
    ProductDetailsComponent,
    WelcomeComponent,
    CartComponent,
    ConvertToSpacesPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'products', component: ProductListComponent },
      {
        path: 'products/:id',
        canActivate: [ProductDetailGuard],
        component: ProductDetailsComponent,
      },
      { path: 'welcome', component: WelcomeComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' },
      { path: 'cart', component: CartComponent },
    ]),
  ],
  providers: [ProductService],
  bootstrap: [AppComponent],
})
export class AppModule {}
