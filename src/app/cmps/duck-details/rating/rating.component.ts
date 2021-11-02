import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent implements OnInit {
  @Input() rating: number
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
        if (star.id <= this.rating) {
          star.class = 'star-gold star';
        } else {
          star.class = 'star-gray star';
        }
        return star;
      });
    } else {
      this.selectedRating = 0
    }
  }


  selectStar(value: number): void {

    // prevent multiple selection
    if (this.selectedRating === 0) {

      this.stars.filter((star) => {

        if (star.id <= value) {

          star.class = 'star-gold star';

        } else {

          star.class = 'star-gray star';

        }

        return star;
      });

    }

    this.selectedRating = value;

  }
}
