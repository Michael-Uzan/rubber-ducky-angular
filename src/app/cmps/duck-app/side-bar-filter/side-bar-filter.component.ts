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

  categories: string[] = ['', 'scary', 'music', 'countries', 'animals', 'sport', 'halloween', 'heroes']
  subscription: Subscription

  constructor(private duckService: DuckService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }

  onChooseCategory(idx: number) {
    this.router.navigateByUrl('/rubber-ducks/products')
    this.duckService.setFilter({
      name: '',
      maxPrice: 30,
      onlyInStock: false,
      category: this.categories[idx],
    })
  }
}
