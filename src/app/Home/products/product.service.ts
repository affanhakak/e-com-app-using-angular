import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';
import { IProduct } from './products';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  // private productUrl = '';
  // constructor(private http: HttpClient) {}
  getProducts(): IProduct[] {
    return [
      {
        productId: 1,
        productName: 'Electronics Store',
        productCode: 'ABC-001',
        releaseDate: 'March 2020',
        description: 'Mobile Phones, Laptops and all Electronic Accessories',
        priceStartsAt: 249.99,
        starRating: 4,
        imageUrl: 'assets/images/electronics.jpg',
      },
      {
        productId: 2,
        productName: 'Fashion Store for Men',
        productCode: 'DEF-002',
        releaseDate: 'May 2020',
        description: 'Jeans, Shirts, Sweat Shirts and grooming items',
        priceStartsAt: 25.99,
        starRating: 3,
        imageUrl: 'assets/images/men.jpg',
      },
      {
        productId: 3,
        productName: 'Fashion Store for Women',
        productCode: 'GHI-003',
        releaseDate: 'May 2020',
        description: 'Jeans, Shirts, Coats and beauty items',
        priceStartsAt: 39.99,
        starRating: 5,
        imageUrl: 'assets/images/women.jpg',
      },
      {
        productId: 4,
        productName: 'Groceries Store',
        productCode: 'JKL-004',
        releaseDate: 'September 2020',
        description: 'All of you day to day grocery items',
        priceStartsAt: 12.99,
        starRating: 4,
        imageUrl: 'assets/images/groceries.jpg',
      },
      {
        productId: 5,
        productName: 'Kids Section',
        productCode: 'MNO-005',
        releaseDate: 'November 2020',
        description: 'Toys, clothing etc for kids',
        priceStartsAt: 18.99,
        starRating: 3,
        imageUrl: 'assets/images/kids.jpg',
      },
    ];
  }
}
