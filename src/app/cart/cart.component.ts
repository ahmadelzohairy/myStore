import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { ICartItems } from '../models/ICartItems';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cartItems!: ICartItems[];
  isCart = true;
  total!: number;
  isSuccess = false;
  fullname!: string;
  constructor(private cart: CartService) {}

  ngOnInit(): void {
    this.cartItems = this.cart.getCartItems();
    let totalPrice = 0;
    this.cartItems.forEach((c) => {
      totalPrice += c.amount * c.product.price;
    });
    this.total = totalPrice;
  }
  success(data: any): void {
    this.isSuccess = data.flag;
    this.fullname = data.fullname;
  }
  changeTotal(newTotal: number){
    this.total = newTotal
  }
}
