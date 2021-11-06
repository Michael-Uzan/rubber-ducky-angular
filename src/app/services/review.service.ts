import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { IDuck } from '../interfaces/IDuck.interface';
import { IReview } from '../interfaces/IReview';
import { REVIEW_DATA } from "../data/review.data";

const REVIEWS: IReview[] = REVIEW_DATA

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
