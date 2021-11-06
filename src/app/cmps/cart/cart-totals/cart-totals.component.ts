import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'cart-totals',
  templateUrl: './cart-totals.component.html',
  styleUrls: ['./cart-totals.component.scss']
})
export class CartTotalsComponent implements OnInit {

  @Output() openModalOrder = new EventEmitter<void>()

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }

  get cartTotalPrice(): number {
    return this.cartService.cartTotalPrice()
  }

  onPlaceOrder() {
    this.openModalOrder.emit()
  }


}
