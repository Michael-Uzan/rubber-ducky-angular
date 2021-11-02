import { Component, OnInit } from '@angular/core';
import { DuckService } from 'src/app/services/duck.service';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent implements OnInit {

  constructor(private duckService: DuckService) { }

  ngOnInit() {
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
