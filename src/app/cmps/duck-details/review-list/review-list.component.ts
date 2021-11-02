import { Component, Input, OnInit } from '@angular/core';
import { IReview } from 'src/app/interfaces/IReview';

@Component({
  selector: 'review-list',
  templateUrl: './review-list.component.html',
  styleUrls: ['./review-list.component.scss']
})
export class ReviewListComponent implements OnInit {
  @Input() reviews: IReview[]

  constructor() { }

  ngOnInit(): void {
  }

}
