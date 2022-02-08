import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProductListComponent } from './Home/products/product-list.component';
import { ConvertToSpacesPipe } from './Shared/convert-to-spaces.pipe';
import { StarComponent } from './Shared/star.component';
import { ProductService } from './Home/products/product.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ConvertToSpacesPipe,
    StarComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [ProductService],
  bootstrap: [AppComponent],
})
export class AppModule {}
