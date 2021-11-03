import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent implements OnInit {
  @Input() rating: number
  @Output() selectedRatingValue = new EventEmitter<number>()
  selectedRating: number
  stars = [
    {
      id: 1,
      icon: 'star',
      class: 'star-gray star-hover star'
    },
    {
      id: 2,
      icon: 'star',
      class: 'star-gray star-hover star'
    },
    {
      id: 3,
      icon: 'star',
      class: 'star-gray star-hover star'
    },
    {
      id: 4,
      icon: 'star',
      class: 'star-gray star-hover star'
    },
    {
      id: 5,
      icon: 'star',
      class: 'star-gray star-hover star'
    }

  ];

  constructor() { }

  ngOnInit(): void {
    if (this.rating) {
      this.stars.filter((star) => {
        star.class = (star.id <= this.rating) ? 'star-gold star' : 'star-gray star'
        return star;
      });
    } else {
      this.selectedRating = 0
    }
  }


  selectStar(value: number): void {
    // prevent multiple selection
    if (!this.rating) {
      this.stars.filter((star) => {
        star.class = ' star star-hover '
        star.class += (star.id <= value) ? 'star-gold' : 'star-gray'
        return star;
      });
    }
    this.selectedRating = value;
    this.selectedRatingValue.emit(this.selectedRating)
  }
}
