import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { IReview } from 'src/app/interfaces/IReview';
import { ReviewService } from 'src/app/services/review.service';

@Component({
  selector: 'reviews-app',
  templateUrl: './reviews-app.component.html',
  styleUrls: ['./reviews-app.component.scss']
})
export class ReviewsAppComponent implements OnInit {
  reviews: IReview[]
  reviews$: Observable<IReview[]>
  subscription: Subscription

  constructor(private reviewService: ReviewService) { }

  ngOnInit(): void {
    this.reviewService.loadReviews()
    this.subscription = this.reviewService.reviews$.subscribe(reviews => {
      this.reviews = reviews
    })
    console.log('reviews', this.reviews)
  }

}
