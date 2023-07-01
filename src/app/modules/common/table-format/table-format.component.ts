import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-format',
  templateUrl: './table-format.component.html',
  styleUrls: ['./table-format.component.scss']
})
export class TableFormatComponent implements OnInit {
  @Input() config;
  constructor() { }

  ngOnInit(): void {
  }

}
