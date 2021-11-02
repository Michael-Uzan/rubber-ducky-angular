import { Component, Input, OnInit } from '@angular/core';
import { IDuck } from 'src/app/interfaces/IDuck.interface';

@Component({
  selector: 'duck-preview',
  templateUrl: './duck-preview.component.html',
  styleUrls: ['./duck-preview.component.scss']
})
export class DuckPreviewComponent implements OnInit {
  @Input() duck: IDuck
  constructor() { }

  ngOnInit(): void {
  }

  get duckClass() {
    if (!this.duck.inStock) return 'out-of-stock'
    return ''
  }

}
