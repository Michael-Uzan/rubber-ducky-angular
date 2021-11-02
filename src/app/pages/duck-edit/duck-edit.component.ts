import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { IDuck } from 'src/app/interfaces/IDuck.interface';
import { DuckService } from 'src/app/services/duck.service';

@Component({
  selector: 'duck-edit',
  templateUrl: './duck-edit.component.html',
  styleUrls: ['./duck-edit.component.scss']
})
export class DuckEditComponent implements OnInit {
  duck: IDuck
  subscription: Subscription

  constructor(private duckService: DuckService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.subscription = this.route.data.subscribe(({ duck }) => {
      this.duck = duck || this.duckService.getEmptyDuck()
    })
  }

  async onSavePet() {
    await this.duckService.save(this.duck).toPromise()
    this.router.navigateByUrl('/rubber-ducks')
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }

}
