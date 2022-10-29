import { Injectable } from '@angular/core';
import { ICartItems } from '../models/ICartItems';
import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor() {}
  cartItems: ICartItems[] = [];
  addToCart(product: Product, amount: number): void {
    const newItem = this.cartItems.filter((c) => c.product.id === product.id);

    if (newItem.length == 0) {
      const item: ICartItems = { product: product, amount: amount };
      this.cartItems.push(item);
    } else {
      this.cartItems = this.cartItems.map((c) =>
        c.product.id === product.id ? { ...c, amount: (c.amount += amount) } : c
      );
    }
  }
  getCartItems(): ICartItems[] {
    console.log(`cart:${this.cartItems}`);
    return this.cartItems;
  }
  getOneCartItem(id: number) {
    return this.cartItems.find((c) => c.product.id === id);
  }
}
