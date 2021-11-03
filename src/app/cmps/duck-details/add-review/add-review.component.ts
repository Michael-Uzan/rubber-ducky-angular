import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IDuck } from 'src/app/interfaces/IDuck.interface';
import { IReview } from 'src/app/interfaces/IReview';
import { ReviewService } from 'src/app/services/review.service';

@Component({
  selector: 'add-review',
  templateUrl: './add-review.component.html',
  styleUrls: ['./add-review.component.scss']
})
export class AddReviewComponent implements OnInit {
  @Input() duck: IDuck
  review: IReview = {
    name: '',
    rating: 0,
    description: '',
  }
  subscription: Subscription
  isError: boolean = false
  constructor(private reviewService: ReviewService) { }

  ngOnInit(): void {
  }

  async onSaveReview() {
    const { name, description, rating } = this.review
    if (!name || !description || !rating) {
      this.isError = true
      return
    }
    this.reviewService.addReview(this.review, this.duck)
    this.reviewService.loadReviews(this.duck._id)
    this.review = { name: '', rating: 0, description: '', }
    this.isError = false
  }

  onSelectRating(value: number) {
    this.review.rating = value
  }

}
