import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { DuckService } from 'src/app/services/duck.service';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent implements OnInit {
  // cartItems$: Observable<ICartItem[][]>
  // subscription: Subscription
  isMenuOpen: boolean = false

  constructor(private duckService: DuckService, private cartService: CartService) { }

  ngOnInit() {
    // this.cartService.loadCart()
    // this.subscription = this.cartService.cartItems$.subscribe(cartItems => {
    //   this.cartItems = cartItems
    // })
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen
  }

  get menuOpenClass(): string {
    if (this.isMenuOpen) return 'menu-open'
    return ''
  }

  get cartLength() {
    return this.cartService.cartLength()
  }

  onShowAllDucks() {
    this.duckService.setFilter({
      name: '',
      maxPrice: 100000,
      onlyInStock: false,
      category: '',
    })
  }


  // ngOnDestroy() {
  //   this.subscription.unsubscribe()
  // }


}
