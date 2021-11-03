import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  // @Input() duck: IDuck
  duck: IDuck
  reviews: IReview[]
  reviews$: Observable<IReview[]>
  subscription: Subscription
  routeDataSub: Subscription
  constructor(private route: ActivatedRoute, private reviewService: ReviewService) { }

  ngOnInit(): void {
    this.routeDataSub = this.route.data.subscribe(data => {
      this.duck = data.duck
      this.reviewService.loadReviews(this.duck._id)
      this.subscription = this.reviewService.reviews$.subscribe(reviews => {
        this.reviews = reviews
      })


    })




  }

}
