import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
  @Input() total: number = 0;
  @Output() newTotal = new EventEmitter();
  amount = 1;

  constructor(private cart: CartService) {}

  ngOnInit(): void {
    this.amount = this.cart.cartItems.find(
      (c) => c.product.id === this.product.id
    )?.amount as number;
  }
  submit(): void {
    this.cart.addToCart(this.product, this.amount);
    alert('added to cart');
  }
  removeItem() {
    const item = this.cart.getOneCartItem(this.product.id);
    if (item) {
      this.total -= item.amount * item.product.price;

      const index = this.cart.cartItems.indexOf(item);
      this.cart.cartItems.splice(index, 1);

      this.newTotal.emit(this.total);

      alert('removed from cart');
      return;
    }

    alert('there is no irems to be removed from cart');
  }
}
