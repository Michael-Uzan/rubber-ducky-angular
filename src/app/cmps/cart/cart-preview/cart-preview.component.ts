import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ICartItem } from 'src/app/interfaces/ICartItem.interface';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'cart-preview',
  templateUrl: './cart-preview.component.html',
  styleUrls: ['./cart-preview.component.scss']
})
export class CartPreviewComponent implements OnInit {
  @Input() cartItem: ICartItem

  constructor(private cartService: CartService, private router: Router) { }

  ngOnInit(): void {
  }

  get itemSubtotal() {
    return this.cartItem.item.price * this.cartItem.quantity
  }

  onDeleteItem() {
    this.cartService.deleteItem(this.cartItem.item._id)
  }

  onItemClick() {
    this.router.navigateByUrl(`/rubber-ducks/products/details/${this.cartItem.item._id}`)
    // [routerLink] = "['/rubber-ducks/products/details', duck._id]"
  }



}
