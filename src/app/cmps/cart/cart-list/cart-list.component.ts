import { Component, Input, OnInit } from '@angular/core';
import { ICartItem } from 'src/app/interfaces/ICartItem.interface';

@Component({
  selector: 'cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
})
export class CartListComponent implements OnInit {
  @Input() cartItems: ICartItem[]
  constructor() { }

  ngOnInit(): void {
  }

}
