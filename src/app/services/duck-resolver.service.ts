import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { IDuck } from '../interfaces/IDuck.interface';
import { DuckService } from './duck.service';

@Injectable({
  providedIn: 'root'
})
export class DuckResolverService implements Resolve<IDuck | null> {
  constructor(private duckService: DuckService) { }

  async resolve(route: ActivatedRouteSnapshot) {
    const { duckId } = route.params
    const res = duckId ? await this.duckService.getDuckById(duckId).toPromise() : null
    return res
  }
}
