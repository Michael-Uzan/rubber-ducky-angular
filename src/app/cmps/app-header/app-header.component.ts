import { Component, OnInit } from '@angular/core';
import { DuckService } from 'src/app/services/duck.service';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent implements OnInit {
  isMenuOpen: boolean = false
  constructor(private duckService: DuckService) { }

  ngOnInit() {
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen
  }

  get menuOpenClass(): string {
    if (this.isMenuOpen) return 'menu-open'
    return ''
  }

  onShowAllDucks() {
    this.duckService.setFilter({
      name: '',
      maxPrice: 100000,
      onlyInStock: false,
      category: '',
    })
  }

}
