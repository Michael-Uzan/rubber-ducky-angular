import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, of, throwError } from 'rxjs';
// import { of } from 'rxjs/observable/of'
import { IDuck } from '../interfaces/IDuck.interface';
import { IFilterBy } from '../interfaces/IFilterBy.interface';

const DUCKS: IDuck[] = [
  {
    "_id": "5a56640269f443a5d64b32ca",
    "name": "Scary Rubber Duck",
    "price": 9.50,
    "inStock": false,
    "category": 'scary',
    "img": "./assets/img/ducks/scary.JPG",
    "details": `Scary rubber duck. Buy the grim reaper of the Amsterdam Duck Store and
     give someone a good fright. This is a duck you don’t want to meet at night. Perfect
      gift for Halloween. Or give it to a friend who’s into horror movies!`,
  },
  {
    "_id": "2a56612369f443a5d64b32ca",
    "name": "Bat Rubber Duck",
    "price": 9.50,
    "inStock": false,
    "category": 'scary',
    "img": "./assets/img/ducks/bat.JPG",
    "details": `Bat Rubber Duck. Buy the fierceful vampire of the Amsterdam Duck Store.
     This bloodthirsty duck only comes out at night. In black with wings, yellow eyes and 
     white Dracula teeth. Be aware…`,
  },
  {
    "_id": "2a566123trf443a5d64b32ca",
    "name": "Monster Green Rubber Duck",
    "price": 9.50,
    "inStock": false,
    "category": 'scary',
    "img": "./assets/img/ducks/monster-green.JPG",
    "details": `Monster Green Rubber Duck. Buy the one eyed green monster of the Amsterdam 
    Duck Store. With four orange horns and big claws.`,
  },
  {
    "_id": "os566nbkirf443a5d64b32ca",
    "name": "Frankenstein Rubber Duck",
    "price": 9.50,
    "inStock": false,
    "category": 'scary',
    "img": "./assets/img/ducks/frankenstein.JPG",
    "details": `Frankenstein Rubber Duck. Buy Frankenstein’s monster, the modern Prometheus 
    of the Amsterdam Duck Store. After the book of Mary Shelley and scary as hell. With green-blue
     face, scars and brown jacket. Good inspiration for Halloween.`,
  },
  {
    "_id": "5a5664025f6ae9aa24a99fde",
    "name": "Ziggy Starduck Rubber Duck",
    "price": 19.00,
    "inStock": true,
    "category": 'music',
    "img": "./assets/img/ducks/ziggy-starduck.JPG",
    "details": `Ziggy Starduck Rubber Duck. Buy the Ziggy Stardust duck-alike 
    of the Amsterdam Duck Store. This celebrity duck is waiting in the sky and would
     like to come and meet us. Wearing Ziggy outfit with “Ziggy Stardust” print and 
     typical lightning make up. Perfect gift for a David Bowie fan. `,
  },
  {
    "_id": "2a5664025f6ae9aa24a99aer",
    "name": "I Love Pizza Rubber Duck",
    "price": 9.50,
    "inStock": true,
    "category": 'countries',
    "img": "./assets/img/ducks/i-love-pizza.JPG",
    "details": `I Love Pizza Rubber Duck. Buy the Italian pizza baker of the
     Amsterdam Duck Store. Wearing a red apron, white shirt, big black moustache
    and an Italian flag cap. Serving a delicious pizza, fresh from the oven. Mangiamo!`,
  },
  {
    "_id": "23g664025f612eaa24a99ae2",
    "name": "British Rubber Duck",
    "price": 9.50,
    "inStock": true,
    "category": 'countries',
    "img": "./assets/img/ducks/british.JPG",
    "details": `British rubber duck. The royal gard of the Amsterdam Duck Store. 
    Armed to the beak. In traditional colors and typical helmet. Perfect gift for 
    friends who love England.`,
  },
  {
    "_id": "pog664025f612rte24a99a67",
    "name": "Liberty Rubber Duck",
    "price": 9.50,
    "inStock": true,
    "category": 'countries',
    "img": "./assets/img/ducks/liberty.JPG",
    "details": `Liberty Rubber Duck. Buy the statue of liberty of the Amsterdam 
    Duck Store. This beacon of New York brings freedom for all our rubber ducks. 
    Whatever color, believe or lifestyle. Nice gift for friends who love to visit 
    New York. Or should we say New Amsterdam?`,
  },
  {
    "_id": "555664025f612rte24a99pp0",
    "name": "Sparta Rubber Duck",
    "price": 8.95,
    "inStock": true,
    "category": 'countries',
    "img": "./assets/img/ducks/sparta.JPG",
    "details": `Sparta Rubber Duck. Buy the ancient Greek hero of the Amsterdam
     Duck Store. With a large scar on his face, wearing a loincloth. Ready for battle.
     Give this duck to a  friend who is into classical antiquity.`,
  },
  {
    "_id": "22366402uu6ae9aa24a99tyt",
    "name": "Bohemian Quacksody Rubber Duck",
    "price": 19.00,
    "inStock": true,
    "category": 'music',
    "img": "./assets/img/ducks/bohemian.JPG",
    "details": `Bohemian Quacksody Rubber Duck. Buy the Freddy 
    Mercury duck-alike of the Amsterdam Duck Store. Looks like the 
    Queen front duck with typical white singlet with ‘Bohemian Quacksody’ 
    print, black sunglasses and moustache. This singer duck is holding a microphone,
     ready to rock you! `,
  },
  {
    "_id": "euo66402uu2ae9aa24a9456t",
    "name": "Purple Waves Rubber Duck",
    "price": 19.00,
    "inStock": true,
    "category": 'music',
    "img": "./assets/img/ducks/purple-waves.JPG",
    "details": `Purple Waves Rubber Duck.  Buy the Jimi Hendrix duck-alike 
    of the Amsterdam Duck Store. Wearing his hippie headband, sunglasses en groovy 
    clothes. Far out… With his electric guitar he’s ready for a psychedelic experience. 
    Give this iconic duck to a sixties friend. `,
  },
  {
    "_id": "12o66402uu2aerrr24a9476o",
    "name": "Born to Sun Rubber Duck",
    "price": 19.00,
    "inStock": true,
    "category": 'music',
    "img": "./assets/img/ducks/born-to-sun.JPG",
    "details": `Born to Sun Rubber Duck. Buy the Bruce Springsteen 
    duck-alike of the Amsterdam Duck Store. Wearing typical bandana and sleeveless
     shirt. With electric guitar, ready to rock. Absolute must have duck for a Springsteen fan. `,
  },
];

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
  // public deleteDuck(id: string) {
  //   //mock the server work
  //   this._ducksDb = this._ducksDb.filter(duck => duck._id !== id)

  //   // change the observable data in the service - let all the subscribers know
  //   this._ducks$.next(this._ducksDb)
  // }

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

  //   private _filter(ducks, term) {
  //     term = term.toLocaleLowerCase()
  //     return ducks.filter(duck => {
  //       return duck.name.toLocaleLowerCase().includes(term) ||
  //         duck.phone.toLocaleLowerCase().includes(term) ||
  //         duck.email.toLocaleLowerCase().includes(term)
  //     })
  //   }

  private _makeId(length = 24): string {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < length; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
  }
}