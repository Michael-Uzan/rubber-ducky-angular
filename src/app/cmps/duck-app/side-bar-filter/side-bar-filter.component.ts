import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { IFilterBy } from 'src/app/interfaces/IFilterBy.interface';
import { DuckService } from 'src/app/services/duck.service';

@Component({
  selector: 'side-bar-filter',
  templateUrl: './side-bar-filter.component.html',
  styleUrls: ['./side-bar-filter.component.scss']
})
export class SideBarFilterComponent implements OnInit {


  subscription: Subscription

  constructor(private duckService: DuckService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }

  onChooseCategory(category: string) {
    this.router.navigateByUrl('/rubber-ducks/products')
    this.duckService.setFilter({
      name: '',
      maxPrice: 100000,
      onlyInStock: false,
      category,
    })
  }
}
