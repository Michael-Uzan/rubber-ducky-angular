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
  title: string
  subscription: Subscription

  constructor(private duckService: DuckService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.subscription = this.route.data.subscribe(({ duck }) => {
      this.duck = duck || this.duckService.getEmptyDuck()
      if (!duck) this.title = 'Add new duck'
      else this.title = 'Edit duck'
    })
  }

  async onSaveDuck() {
    if (!this.duck.name || !this.duck.price) return
    await this.duckService.save(this.duck).toPromise()
    this.router.navigateByUrl('/rubber-ducks/products')
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }

}
