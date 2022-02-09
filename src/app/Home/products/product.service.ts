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
  getProductById(id: number): IProduct {
    return (
      this.getProducts().find((p) => p.productId === id) || ({} as IProduct)
    );
  }
  getProducts(): IProduct[] {
    return [
      {
        productId: 1,
        productName: 'Mac Book',
        productCode: 'ABC-001',
        releaseDate: 'March 2020',
        description: 'Shop our wide range of mac books and iPads',
        priceStartsAt: 249.99,
        starRating: 4,
        imageUrl: 'assets/images/electronics.jpg',
      },
      {
        productId: 2,
        productName: 'US Polo Jackets',
        productCode: 'DEF-002',
        releaseDate: 'May 2020',
        description: 'Shop US Polo Jackets from our fashion store',
        priceStartsAt: 25.99,
        starRating: 3,
        imageUrl: 'assets/images/men.jpg',
      },
      {
        productId: 3,
        productName: 'Madame Coats',
        productCode: 'GHI-003',
        releaseDate: 'July 2020',
        description: 'Shop Madame coats for official purposes',
        priceStartsAt: 39.99,
        starRating: 5,
        imageUrl: 'assets/images/women.jpg',
      },
      {
        productId: 4,
        productName: 'Groceries',
        productCode: 'JKL-004',
        releaseDate: 'Sept 2020',
        description: 'Shop all of your day to day grocery items',
        priceStartsAt: 12.99,
        starRating: 4,
        imageUrl: 'assets/images/groceries.jpg',
      },
      {
        productId: 5,
        productName: 'Toys',
        productCode: 'MNO-005',
        releaseDate: 'Nov 2020',
        description: 'Shop your favourite toys, clothing etc for kids',
        priceStartsAt: 18.99,
        starRating: 3,
        imageUrl: 'assets/images/kids.jpg',
      },
      {
        productId: 6,
        productName: 'Decorations',
        productCode: 'PQR-006',
        releaseDate: 'Jan 2021',
        description: 'Decorations for your living, bed and dining rooms',
        priceStartsAt: 41.99,
        starRating: 4,
        imageUrl: 'assets/images/decorations.jpg',
      },
      {
        productId: 8,
        productName: 'Mobile Phones',
        productCode: 'STU-007',
        releaseDate: 'March 2021',
        description: 'Our wide range of mobile phones from different brands',
        priceStartsAt: 149.99,
        starRating: 5,
        imageUrl: 'assets/images/details/el-1.jpg',
      },
      {
        productId: 8,
        productName: 'Sweat Shirts',
        productCode: 'VWX-008',
        releaseDate: 'May 2021',
        description: 'Shop your favourite sweat shirts from our fashion store',
        priceStartsAt: 36.99,
        starRating: 3,
        imageUrl: 'assets/images/details/mc-2.jpg',
      },
      {
        productId: 9,
        productName: 'Shirts',
        productCode: 'YZA-009',
        releaseDate: 'July 2021',
        description: 'Shop your multi color shirts from our fashion store',
        priceStartsAt: 29.99,
        starRating: 4,
        imageUrl: 'assets/images/details/mc-3.jpg',
      },
    ];
  }
}
