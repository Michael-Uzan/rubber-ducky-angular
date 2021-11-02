import { Component, Input, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { IDuck } from 'src/app/interfaces/IDuck.interface';
import { IReview } from 'src/app/interfaces/IReview';
import { ReviewService } from 'src/app/services/review.service';

@Component({
  selector: 'review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent implements OnInit {
  @Input() duck: IDuck
  reviews: IReview[]
  reviews$: Observable<IReview[]>
  subscription: Subscription

  constructor(private reviewService: ReviewService) { }

  ngOnInit(): void {
    this.reviewService.loadReviews(this.duck._id)
    this.subscription = this.reviewService.reviews$.subscribe(reviews => {
      this.reviews = reviews
    })
  }

}
