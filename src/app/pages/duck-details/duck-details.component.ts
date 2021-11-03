import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { IDuck } from 'src/app/interfaces/IDuck.interface';
import { DuckService } from 'src/app/services/duck.service';

@Component({
  selector: 'duck-details',
  templateUrl: './duck-details.component.html',
  styleUrls: ['./duck-details.component.scss']
})
export class DuckDetailsComponent implements OnInit {
  duck: IDuck
  ducks: IDuck[]
  routeDataSub: Subscription
  ducksSub: Subscription
  relatedDucks: IDuck[]
  constructor(private route: ActivatedRoute, private duckService: DuckService) { }

  async ngOnInit(): Promise<void> {

    this.ducksSub = this.duckService.ducks$.subscribe(ducks => {
      this.ducks = ducks
    })
    this.routeDataSub = this.route.data.subscribe(data => {
      this.duck = data.duck
      this.relatedDucks = this.ducks.filter(duck => {
        return ((duck.category === this.duck.category) && (duck._id !== this.duck._id))
      })
    })

  }

  get inStock() {
    if (this.duck.inStock) return { txt: 'In Stock', class: 'green' }
    return { txt: 'Out Of Stock', class: 'red' }
  }

  ngOnDestroy() {
    this.routeDataSub.unsubscribe()
    this.ducksSub.unsubscribe()
  }
}
