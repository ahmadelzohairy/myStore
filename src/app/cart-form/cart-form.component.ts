import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart-form',
  templateUrl: './cart-form.component.html',
  styleUrls: ['./cart-form.component.css'],
})
export class CartFormComponent implements OnInit {
  fullname!: string;
  address!: string;
  creditcard!: number;
  @Output() isSuccess = new EventEmitter();
  constructor(private router: Router) {}

  ngOnInit(): void {}
  submit(): void {
    console.log(`fullname: ${this.fullname}
    address:${this.address}
    creditcard: ${this.creditcard}`);
    this.isSuccess.emit({flag:true, fullname:this.fullname});
  }
}
