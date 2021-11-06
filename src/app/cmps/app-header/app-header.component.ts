import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { DuckService } from 'src/app/services/duck.service';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent implements OnInit {
  isMenuOpen: boolean = false

  constructor(private duckService: DuckService, private cartService: CartService) { }

  ngOnInit() {
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen
  }

  get menuOpenClass(): string {
    if (this.isMenuOpen) return 'menu-open'
    return ''
  }

  get cartLength() {
    return ((this.cartService.cartLength()) ?
      (this.cartService.cartLength() + ' items')
      : '')
  }

  onShowAllDucks() {
    this.duckService.resetFilter()
  }

}
