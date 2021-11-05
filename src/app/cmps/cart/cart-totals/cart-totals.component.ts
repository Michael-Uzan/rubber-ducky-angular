import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'cart-totals',
  templateUrl: './cart-totals.component.html',
  styleUrls: ['./cart-totals.component.scss']
})
export class CartTotalsComponent implements OnInit {

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }

  get cartTotalPrice() {
    return this.cartService.cartTotalPrice()
  }

  onPlaceOrder() {
    this.cartService.clearCart()
    // Open Modal
  }


}
