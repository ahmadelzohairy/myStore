import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { Product } from '../models/Product';
import { CartService } from '../services/cart.service';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css'],
})
export class ProductItemDetailComponent implements OnInit {
  products!: Product[];
  id!: number;
  product!: Product;
  amount!: number;
  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private cart: CartService
  ) {}

  ngOnInit(): void {
    this.amount = this.cart.cartItems.find(
      (c) => c.product.id === this.product.id
    )?.amount as number;

    this.id = this.route.snapshot.params['id'];

    this.productService.getProducts().subscribe((res) => {
      this.product = res.find((p) => p.id == this.id) as Product;
    });
  }
  submit(): void {
    this.cart.addToCart(this.product, this.amount);
  }
}
