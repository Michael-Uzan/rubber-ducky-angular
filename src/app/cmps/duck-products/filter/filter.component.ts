import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IFilterBy } from 'src/app/interfaces/IFilterBy.interface';
import { DuckService } from 'src/app/services/duck.service';

@Component({
  selector: 'filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  filterBy: IFilterBy = {
    name: '',
    maxPrice: 100000,
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

  onSetFilter() {
    this.duckService.setFilter({ ...this.filterBy })
  }

}
