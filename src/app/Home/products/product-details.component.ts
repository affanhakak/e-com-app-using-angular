import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pm-product-detail',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  pageTitle: string = 'Product-Detail';
  constructor() {}
  ngOnInit(): void {}
}
