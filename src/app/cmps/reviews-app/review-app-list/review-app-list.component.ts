import { Component, Input, OnInit } from '@angular/core';
import { IReview } from 'src/app/interfaces/IReview';

@Component({
  selector: 'review-app-list',
  templateUrl: './review-app-list.component.html',
  styleUrls: ['./review-app-list.component.scss']
})
export class ReviewAppListComponent implements OnInit {
  @Input() reviews: IReview[]
  constructor() { }

  ngOnInit(): void {
  }

}
