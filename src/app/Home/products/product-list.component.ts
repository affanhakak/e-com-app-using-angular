import { Component } from '@angular/core';

@Component({
  selector: 'pm-products',
  templateUrl: './product-list.component.html',
})
export class ProductListComponent {
  pageTitle = 'Product list';
  imageWidth = 150;
  imageMargin = 4;
  showImage: boolean = false;
  listFilter: string = 'cart';
  products: any[] = [
    {
      productId: 1,
      productName: 'Sweaters',
      productCode: 'ABC-001',
      releaseDate: 'March 2022',
      description: 'A woolen sweater by Nike',
      price: 32.99,
      starRating: 4.5,
      imageUrl: 'assets/images/sweater.jpg',
    },
    {
      productId: 2,
      productName: 'Jeans',
      productCode: 'DEF-002',
      releaseDate: 'May 2022',
      description: 'Washed Jeans by US-Polo',
      price: 20.99,
      starRating: 4.8,
      imageUrl: 'assets/images/jeans.jpg',
    },
    {
      productId: 3,
      productName: 'Long Coats',
      productCode: 'GHI-003',
      releaseDate: 'July 2022',
      description: 'Long coat by Madame',
      price: 39.99,
      starRating: 4.0,
      imageUrl: 'assets/images/coat.jpg',
    },
    {
      productId: 4,
      productName: 'Shoes',
      productCode: 'JKL-004',
      releaseDate: 'September 2022',
      description: 'Shoes by Nike Air',
      price: 25.99,
      starRating: 4.6,
      imageUrl: 'assets/images/shoes.jpg',
    },
    {
      productId: 5,
      productName: 'Sweat Shirts',
      productCode: 'MNO-005',
      releaseDate: 'November 2022',
      description: 'Sweat Shirts by UCB',
      price: 18.99,
      starRating: 4.9,
      imageUrl: 'assets/images/sweatshirt.jpg',
    },
  ];
  toggleImage(): void {
    this.showImage = !this.showImage;
  }
}
