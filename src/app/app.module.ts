import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
