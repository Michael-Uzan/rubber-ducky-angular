import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'cart-order-msg',
  templateUrl: './cart-order-msg.component.html',
  styleUrls: ['./cart-order-msg.component.scss']
})
export class CartOrderMsgComponent implements OnInit {

  @Output() closeModalOrder = new EventEmitter<void>()
  constructor() { }

  closeModal() {
    this.closeModalOrder.emit()
  }

  ngOnInit(): void {
  }

}
