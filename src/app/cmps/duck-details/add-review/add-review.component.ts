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

  constructor(private reviewService: ReviewService) { }

  ngOnInit(): void {
  }

  async onSaveReview() {
    if (!this.review.name || !this.review.description || this.review.rating) return
    this.reviewService.addReview(this.review, this.duck)
  }

}
