import { Component, Input, OnInit } from '@angular/core';
import { IReview } from 'src/app/interfaces/IReview';

@Component({
  selector: 'review-app-preview',
  templateUrl: './review-app-preview.component.html',
  styleUrls: ['./review-app-preview.component.scss']
})
export class ReviewAppPreviewComponent implements OnInit {
  @Input() review: IReview
  constructor() { }

  ngOnInit(): void {
  }

}
