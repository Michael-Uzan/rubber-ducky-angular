import { Component, Input, OnInit } from '@angular/core';
import { IDuck } from 'src/app/interfaces/IDuck.interface';

@Component({
  selector: 'duck-list',
  templateUrl: './duck-list.component.html',
  styleUrls: ['./duck-list.component.scss']
})
export class DuckListComponent implements OnInit {
  @Input() ducks: IDuck[]
  constructor() { }

  ngOnInit(): void {
  }

}
