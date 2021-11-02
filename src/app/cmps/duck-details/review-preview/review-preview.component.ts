import { Component, Input, OnInit } from '@angular/core';
import { IReview } from 'src/app/interfaces/IReview';

@Component({
  selector: 'review-preview',
  templateUrl: './review-preview.component.html',
  styleUrls: ['./review-preview.component.scss']
})
export class ReviewPreviewComponent implements OnInit {
  @Input() review: IReview
  constructor() { }

  ngOnInit(): void {
  }

}
