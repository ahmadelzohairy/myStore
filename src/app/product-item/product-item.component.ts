import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../models/Product';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent implements OnInit {
  @Input() product!: Product;
  @Input() isCart!: boolean;
  amount = 1;

  constructor(private cart: CartService) {}

  ngOnInit(): void {
    this.amount = this.cart.cartItems.find(c => c.product.id === this.product.id)?.amount as number;
  }
  submit(): void {
    this.cart.addToCart(this.product, this.amount);
  }
}
