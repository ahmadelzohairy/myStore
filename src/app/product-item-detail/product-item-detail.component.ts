import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
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
    this.id = this.route.snapshot.params['id'];

    this.productService.getProducts().subscribe((res) => {
      this.product = res.find((p) => p.id == this.id) as Product;
    });
  }
  submit(): void {
    this.cart.addToCart(this.product, this.amount);
    this.amount = this.cart.cartItems.find((c) => c.product.id === this.id)
      ?.amount as number;
    alert('added to cart');
  }
  // removeItem() {
  //   const item = this.cart.getOneCartItem(this.product.id);
  //   if (item) {
  //     const index = this.cart.cartItems.indexOf(item);
  //     this.cart.cartItems.splice(index, 1);
  //     alert('removed from cart');
  //     return;
  //   }

  //   alert('there is no irems to be removed from cart');
  // }
}
