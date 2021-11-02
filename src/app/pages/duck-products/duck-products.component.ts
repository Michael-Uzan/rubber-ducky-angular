import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { IDuck } from 'src/app/interfaces/IDuck.interface';
import { DuckService } from 'src/app/services/duck.service';

@Component({
  selector: 'duck-products',
  templateUrl: './duck-products.component.html',
  styleUrls: ['./duck-products.component.scss']
})
export class DuckProductsComponent implements OnInit {
  ducks: IDuck[]
  ducks$: Observable<IDuck[]>
  subscription: Subscription

  constructor(private duckService: DuckService) { }

  ngOnInit(): void {
    this.duckService.loadDucks()
    this.subscription = this.duckService.ducks$.subscribe(ducks => {
      this.ducks = ducks
    })
  }

}
