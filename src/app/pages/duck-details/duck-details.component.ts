import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { IDuck } from 'src/app/interfaces/IDuck.interface';
import { CartService } from 'src/app/services/cart.service';
import { DuckService } from 'src/app/services/duck.service';

@Component({
  selector: 'duck-details',
  templateUrl: './duck-details.component.html',
  styleUrls: ['./duck-details.component.scss']
})
export class DuckDetailsComponent implements OnInit {
  duck: IDuck
  ducks: IDuck[]
  routeDataSub: Subscription
  ducksSub: Subscription
  relatedDucks: IDuck[]
  quantity: number = 1
  isShowUserMsg: boolean = false

  constructor(private route: ActivatedRoute, private duckService: DuckService, private cartService: CartService) { }

  async ngOnInit(): Promise<void> {

    this.ducksSub = this.duckService.ducks$.subscribe(ducks => {
      this.ducks = ducks
    })
    this.routeDataSub = this.route.data.subscribe(data => {
      this.duck = data.duck
      this.relatedDucks = this.duckService.getRelatedDucks(this.duck)
    })

  }

  onAddToCart() {
    if (this.quantity <= 0) return
    this.cartService.addToCart(this.duck, this.quantity)
    this.showUserMsg()
  }

  get inStock() {
    if (this.duck.inStock) return { txt: 'In Stock', class: 'in-stock' }
    return { txt: 'Out Of Stock', class: 'out-of-stock' }
  }

  get userMsgClass(): string {
    if (this.isShowUserMsg) return 'display'
    else return 'hidden'
  }

  private showUserMsg() {
    this.isShowUserMsg = true
    setTimeout(() => {
      this.isShowUserMsg = false
    }, 2000)
  }

  ngOnDestroy() {
    this.routeDataSub.unsubscribe()
    this.ducksSub.unsubscribe()
  }
}
