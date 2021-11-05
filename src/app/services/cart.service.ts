import { Injectable } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';
import { ICartItem } from '../interfaces/ICartItem.interface';
import { IDuck } from '../interfaces/IDuck.interface';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  // Dummy Data mock items on cart
  private _cartItems: ICartItem[] = [
    {
      item: {
        _id: "os566nbkirf443a5d64b32ca",
        name: "Frankenstein Rubber Duck",
        price: 9.50,
        img: "./assets/img/ducks/frankenstein.JPG",
      },
      quantity: 2,
    },
    {
      item: {
        _id: "2a5664025f6ae9aa24a99aer",
        name: "I Love Pizza Rubber Duck",
        price: 9.50,
        img: "./assets/img/ducks/i-love-pizza.JPG",
      },
      quantity: 1,
    }

  ];

  private _cartItems$ = new BehaviorSubject<ICartItem[]>([])
  public cartItems$ = this._cartItems$.asObservable()

  constructor() { }

  public loadCart() {
    this._cartItems$.next(this._cartItems)
  }

  public deleteItem(id: string | undefined) {
    this._cartItems = this._cartItems.filter(cartItem => cartItem.item._id !== id)
    this._cartItems$.next(this._cartItems)
  }

  public addToCart(duck: IDuck, quantity: number) {

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

  public clearCart() {
    this._cartItems = []
    this._cartItems$.next(this._cartItems)
  }

  public cartLength() {
    return this._cartItems.reduce((acc, cartItem) => {
      return acc + cartItem.quantity
    }, 0)
  }

  public cartTotalPrice() {
    return this._cartItems.reduce((acc, cartItem) => {
      return acc + (cartItem.quantity * cartItem.item.price)
    }, 0)
  }

  private createNewCartItem(duck: IDuck) {
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
