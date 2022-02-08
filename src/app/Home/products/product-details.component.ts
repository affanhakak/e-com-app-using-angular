import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from './products';
import { Router } from '@angular/router';

@Component({
  selector: 'pm-product-detail',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  pageTitle: string = 'Product-Detail';
  product: IProduct | undefined;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.pageTitle += `: ${id}`;
    this.product = {
      productId: id,
      productName: 'Electronics Store',
      productCode: 'ABC-001',
      releaseDate: 'March 2020',
      description: 'Mobile Phones, Laptops and all Electronic Accessories',
      priceStartsAt: 249.99,
      starRating: 4,
      imageUrl: 'assets/images/electronics.jpg',
    };
  }
  onBack(): void {
    this.router.navigate(['/products']);
  }
}
