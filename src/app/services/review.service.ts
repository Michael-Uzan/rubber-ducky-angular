import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { IDuck } from '../interfaces/IDuck.interface';
import { IReview } from '../interfaces/IReview';

const REVIEWS: IReview[] = [
  {
    _id: "123456gjs34d",
    to: {
      duckId: "5a56640269f443a5d64b32ca",
      duckName: "Scary Rubber Duck",
      duckImg: "./assets/img/ducks/scary.JPG",
    },
    name: "Ranji",
    rating: 3,
    description: "Very cool duck!! I like it a lot",
    at: 1635554522601
  },
  {
    _id: "fj234r589fuedwf9",
    to: {
      duckId: "5a56640269f443a5d64b32ca",
      duckName: "Scary Rubber Duck",
      duckImg: "./assets/img/ducks/scary.JPG",
    },
    name: "Omiki",
    rating: 4,
    description: "This is great product",
    at: 1631864521001
  },
  {
    _id: "ad8afu34jr5980efu",
    to: {
      duckId: "22366402uu6ae9aa24a99tyt",
      duckName: "Bohemian Quacksody Rubber Duck",
      duckImg: "./assets/img/ducks/bohemian.JPG",
    },
    name: "Dave",
    rating: 5,
    description: "This is so cool!!!",
    at: 1632882521001
  },
  {
    _id: "2345jgws09yfj4",
    to: {
      duckId: "22366402uu6ae9aa24a99tyt",
      duckName: "Bohemian Quacksody Rubber Duck",
      duckImg: "./assets/img/ducks/bohemian.JPG",
    },
    name: "Muki D",
    rating: 2,
    description: "Didnt like it :(",
    at: 1332882524501
  },
  {
    _id: "sad87wqdj8y",
    to: {
      duckId: "2a56612369f443a5d64b32ca",
      duckName: "Bat Rubber Duck",
      duckImg: "./assets/img/ducks/bat.JPG",
    },
    name: "Sharon",
    rating: 5,
    description: "My Kids love it",
    at: 1635886984501
  },
]

@Injectable({
  providedIn: 'root'
})
export class ReviewService {


  private _reviewsDb: IReview[] = REVIEWS;
  private _reviews$ = new BehaviorSubject<IReview[]>([])
  public reviews$ = this._reviews$.asObservable()

  constructor() { }

  public loadReviews(duckId: string | null = null): void {
    if (duckId) {
      var reviewsToShow = this._reviewsDb.filter((review) => review.to?.duckId === duckId);
    } else {
      var reviewsToShow = this._reviewsDb
    }
    this._reviews$.next(reviewsToShow)
  }

  public addReview(review: IReview, duck: IDuck): Observable<IReview> {
    const newReview: IReview = {
      _id: this._makeId(),
      at: Date.now(),
      to: {
        duckId: duck._id,
        duckName: duck.name,
        duckImg: duck.img,
      },
      ...review
    }
    this._reviewsDb.unshift(newReview)
    this._reviews$.next(this._reviewsDb)
    return of(newReview)
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
