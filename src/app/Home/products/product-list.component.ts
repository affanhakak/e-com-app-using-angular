import { Component, OnInit } from '@angular/core';
import { IProduct } from './products';

@Component({
  selector: 'pm-products',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  pageTitle = 'Product list';
  imageWidth = 200;
  imageMargin = 2;
  showImage: boolean = false;

  private _listFilter: string = '';
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    console.log('In setter:', value);
    this.filteredProducts = this.performFilter(value);
  }

  filteredProducts: IProduct[] = [];
  products: IProduct[] = [
    {
      productId: 1,
      productName: 'Electronics Store',
      productCode: 'ABC-001',
      releaseDate: 'March 2020',
      description: 'Mobile Phones, Laptops and all Electronic Accessories',
      priceStartsAt: 249.99,
      starRating: 4.5,
      imageUrl: 'assets/images/electronics.jpg',
    },
    {
      productId: 2,
      productName: 'Fashion Store for Men',
      productCode: 'DEF-002',
      releaseDate: 'May 2020',
      description: 'Jeans, Shirts, Sweat Shirts and grooming items',
      priceStartsAt: 25.99,
      starRating: 4.8,
      imageUrl: 'assets/images/men.jpg',
    },
    {
      productId: 3,
      productName: 'Fashion Store for Women',
      productCode: 'GHI-003',
      releaseDate: 'May 2020',
      description: 'Jeans, Shirts, Coats and beauty items',
      priceStartsAt: 39.99,
      starRating: 4.0,
      imageUrl: 'assets/images/women.jpg',
    },
    {
      productId: 4,
      productName: 'Groceries Store',
      productCode: 'JKL-004',
      releaseDate: 'September 2020',
      description: 'All of you day to day grocery items',
      priceStartsAt: 12.99,
      starRating: 4.6,
      imageUrl: 'assets/images/groceries.jpg',
    },
    {
      productId: 5,
      productName: 'Kids Section',
      productCode: 'MNO-005',
      releaseDate: 'November 2020',
      description: 'Toys, clothing etc for kids',
      priceStartsAt: 18.99,
      starRating: 4.9,
      imageUrl: 'assets/images/kids.jpg',
    },
  ];

  performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: IProduct) =>
      product.productName.toLocaleLowerCase().includes(filterBy)
    );
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  ngOnInit(): void {
    console.log('In OnInit');
  }
}
