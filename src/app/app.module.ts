import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppFooterComponent } from './cmps/app-footer/app-footer.component';
import { AppHeaderComponent } from './cmps/app-header/app-header.component';
import { DuckAppComponent } from './pages/duck-app/duck-app.component';
import { DuckListComponent } from './cmps/duck-products/duck-list/duck-list.component';
import { DuckPreviewComponent } from './cmps/duck-products/duck-preview/duck-preview.component';
import { FilterComponent } from './cmps/duck-products/filter/filter.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './pages/home/home.component';
import { DuckDetailsComponent } from './pages/duck-details/duck-details.component';
import { DuckProductsComponent } from './pages/duck-products/duck-products.component';
import { SideBarFilterComponent } from './cmps/duck-app/side-bar-filter/side-bar-filter.component';
import { DuckEditComponent } from './pages/duck-edit/duck-edit.component';
import { ReviewComponent } from './cmps/duck-details/review/review.component';
import { ReviewListComponent } from './cmps/duck-details/review-list/review-list.component';
import { ReviewPreviewComponent } from './cmps/duck-details/review-preview/review-preview.component';
import { RatingComponent } from './cmps/duck-details/rating/rating.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AddReviewComponent } from './cmps/duck-details/add-review/add-review.component';
import { NaturalTypePipe } from './pipes/natural-type.pipe';
import { FirstCapitalPipe } from './pipes/first-capital.pipe';
import { DateDeskPipe } from './pipes/date-desk.pipe';
import { ReviewsAppComponent } from './pages/reviews-app/reviews-app.component';
import { ReviewAppListComponent } from './cmps/reviews-app/review-app-list/review-app-list.component';
import { ReviewAppPreviewComponent } from './cmps/reviews-app/review-app-preview/review-app-preview.component';
import { SortPipe } from './pipes/sort.pipe';


@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    AppFooterComponent,
    DuckAppComponent,
    DuckListComponent,
    DuckPreviewComponent,
    FilterComponent,
    HomeComponent,
    DuckDetailsComponent,
    DuckProductsComponent,
    SideBarFilterComponent,
    DuckEditComponent,
    ReviewComponent,
    ReviewListComponent,
    ReviewPreviewComponent,
    RatingComponent,
    AddReviewComponent,
    NaturalTypePipe,
    FirstCapitalPipe,
    DateDeskPipe,
    ReviewsAppComponent,
    ReviewAppListComponent,
    ReviewAppPreviewComponent,
    SortPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatIconModule,
    NoopAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
