import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { IDuck } from 'src/app/interfaces/IDuck.interface';
import { DuckService } from 'src/app/services/duck.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  ducks: IDuck[]
  ducks$: Observable<IDuck[]>
  subscription: Subscription

  constructor(private duckService: DuckService) { }

  ngOnInit(): void {
    this.duckService.loadDucks()
    this.subscription = this.duckService.ducks$.subscribe(ducks => {
      this.ducks = ducks.slice(6)
    })
  }
}
