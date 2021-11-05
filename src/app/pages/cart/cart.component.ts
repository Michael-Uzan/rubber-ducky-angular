import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { ICartItem } from 'src/app/interfaces/ICartItem.interface';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartItems: ICartItem[]
  cartItems$: Observable<ICartItem[][]>
  subscription: Subscription

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.loadCart()
    this.subscription = this.cartService.cartItems$.subscribe(cartItems => {
      this.cartItems = cartItems
    })
  }



  ngOnDestroy() {
    this.subscription.unsubscribe()
  }

}
