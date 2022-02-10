import { Injectable } from '@angular/core';
import { IProduct } from './Home/products/products';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  products: IProduct[] = [];

  constructor() {}
  addToCart(product: IProduct) {
    this.products.push(product);
  }
  getProducts() {
    return this.products;
  }
  clearCart(product: IProduct) {
    return this.products;
  }
}
