import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { IDuck } from 'src/app/interfaces/IDuck.interface';
import { IFilterBy } from 'src/app/interfaces/IFilterBy.interface';
import { DuckService } from 'src/app/services/duck.service';

@Component({
  selector: 'duck-app',
  templateUrl: './duck-app.component.html',
  styleUrls: ['./duck-app.component.scss']
})
export class DuckAppComponent implements OnInit {

  filterBy: IFilterBy = {
    name: '',
    maxPrice: 30,
    onlyInStock: false,
    category: '',
  }
  subscription: Subscription

  constructor(private duckService: DuckService) { }

  ngOnInit(): void {
    this.subscription = this.duckService.filterBy$.subscribe(filterBy => {
      this.filterBy = filterBy
    })
  }

}
