import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, of, throwError } from 'rxjs';
// import { of } from 'rxjs/observable/of'
import { IDuck } from '../interfaces/IDuck.interface';
import { IFilterBy } from '../interfaces/IFilterBy.interface';
import { DUCK_DATA } from "../data/duck.data";

const DUCKS: IDuck[] = DUCK_DATA;

@Injectable({
  providedIn: 'root'
})
export class DuckService {

  //mock the server
  private _ducksDb: IDuck[] = DUCKS;

  private _ducks$ = new BehaviorSubject<IDuck[]>([])
  public ducks$ = this._ducks$.asObservable()

  private _filterBy$ = new BehaviorSubject<IFilterBy>({
    name: '',
    maxPrice: 20,
    onlyInStock: false,
    category: '',
  })
  public filterBy$ = this._filterBy$.asObservable()

  constructor() {
  }


  public loadDucks(): void {
    const filterBy = this._filterBy$.getValue()
    const regex = new RegExp(filterBy.name, "i");
    let ducksToShow = this._ducksDb.filter((duck) => {
      return regex.test(duck.name) &&
        (duck.price < filterBy.maxPrice) &&
        (filterBy.onlyInStock ? duck.inStock : true)
    });
    if (filterBy.category) {
      ducksToShow = ducksToShow.filter((duck) => filterBy.category === duck.category)
    }
    this._ducks$.next(this._sort(ducksToShow))
  }

  public setFilter(filterBy: IFilterBy): void {
    this._filterBy$.next(filterBy)
    this.loadDucks()
  }

  public resetFilter(): void {
    this.setFilter({
      name: '',
      maxPrice: 30,
      onlyInStock: false,
      category: '',
    })
  }

  public getRelatedDucks(relatedDuck: IDuck): IDuck[] {
    return this._ducksDb.filter(duck => {
      return ((duck.category === relatedDuck.category) && (duck._id !== relatedDuck._id))
    })
  }


  public getDuckById(duckId: string): Observable<IDuck> {
    const duck = this._ducksDb.find(duck => duck._id === duckId)
    //return an observable
    return duck ? of({ ...duck }) : throwError(new Error(`couldn't find duck with id ${duckId}`))
  }

  public getEmptyDuck(): IDuck {
    return {
      name: '',
      price: 12,
      details: '',
      inStock: true,
      category: '',
      img: 'https://m.media-amazon.com/images/I/61su4ZAG94L._AC_SX425_.jpg'
    }
  }

  public save(duck: IDuck): Observable<IDuck> {
    return duck._id ? this._updateDuck(duck) : this._addDuck(duck)
  }

  private _updateDuck(duck: IDuck): Observable<IDuck> {
    //mock the server work
    this._ducksDb = this._ducksDb.map(c => duck._id === c._id ? duck : c)
    // change the observable data in the service - let all the subscribers know
    this._ducks$.next(this._sort(this._ducksDb))
    return of(duck)
  }

  private _addDuck(duck: IDuck): Observable<IDuck> {
    //mock the server work
    const newDuck: IDuck = {
      _id: this._makeId(),
      ...duck
    }
    this._ducksDb.push(newDuck)
    this._ducks$.next(this._sort(this._ducksDb))
    return of(newDuck)
  }

  private _sort(ducks: IDuck[]): IDuck[] {
    return ducks.sort((a, b) => {
      if (a.name.toLocaleLowerCase() < b.name.toLocaleLowerCase()) {
        return -1;
      }
      if (a.name.toLocaleLowerCase() > b.name.toLocaleLowerCase()) {
        return 1;
      }

      return 0;
    })
  }

  private _makeId(length = 24): string {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < length; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
  }
}