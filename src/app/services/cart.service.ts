import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { ICartItem } from '../interfaces/ICartItem.interface';
import { IDuck } from '../interfaces/IDuck.interface';
import { CART_DATA } from "../data/cart.data";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  // Dummy Data mock items on cart
  private _cartItems: ICartItem[] = CART_DATA

  private _cartItems$ = new BehaviorSubject<ICartItem[]>([])
  public cartItems$ = this._cartItems$.asObservable()

  constructor() { }

  public loadCart(): void {
    this._cartItems$.next(this._cartItems)
  }

  public deleteItem(id: string | undefined): void {
    this._cartItems = this._cartItems.filter(cartItem => cartItem.item._id !== id)
    this._cartItems$.next(this._cartItems)
  }

  public addToCart(duck: IDuck, quantity: number): Observable<ICartItem[]> {

    const existsItem = this._cartItems.find(cartItem => cartItem.item._id === duck._id)
    if (existsItem) existsItem.quantity += quantity
    else {
      const newItem: ICartItem = this.createNewCartItem(duck)
      newItem.quantity = quantity
      this._cartItems.unshift(newItem)
    }
    this._cartItems$.next(this._cartItems)
    return of(this._cartItems)
  }

  public clearCart(): void {
    this._cartItems = []
    this._cartItems$.next(this._cartItems)
  }

  public cartLength(): number {
    return this._cartItems.reduce((acc, cartItem) => {
      return acc + cartItem.quantity
    }, 0)
  }

  public cartTotalPrice(): number {
    return this._cartItems.reduce((acc, cartItem) => {
      return acc + (cartItem.quantity * cartItem.item.price)
    }, 0)
  }

  private createNewCartItem(duck: IDuck): ICartItem {
    return {
      item: {
        _id: duck._id,
        name: duck.name,
        price: duck.price,
        img: duck.img,
      },
      quantity: 1,
    }
  }

}
