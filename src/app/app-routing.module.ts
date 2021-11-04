import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DuckDetailsComponent } from './pages/duck-details/duck-details.component';
import { DuckAppComponent } from './pages/duck-app/duck-app.component';
import { HomeComponent } from './pages/home/home.component';
import { DuckResolverService } from './services/duck-resolver.service';
import { DuckProductsComponent } from './pages/duck-products/duck-products.component';
import { DuckEditComponent } from './pages/duck-edit/duck-edit.component';
import { ReviewsAppComponent } from './pages/reviews-app/reviews-app.component';
import { CartComponent } from './pages/cart/cart.component';

const routes: Routes = [
  {
    path: 'rubber-ducks', component: DuckAppComponent, children: [
      { path: 'products/details/:duckId', component: DuckDetailsComponent, resolve: { duck: DuckResolverService } },
      { path: 'products', component: DuckProductsComponent },
      { path: 'reviews', component: ReviewsAppComponent },
      { path: 'cart', component: CartComponent },
    ]
  },
  { path: 'edit/:duckId', component: DuckEditComponent, resolve: { duck: DuckResolverService } },
  { path: 'edit', component: DuckEditComponent, resolve: { duck: DuckResolverService } },
  { path: '', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true, paramsInheritanceStrategy: 'always' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
