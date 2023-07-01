import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-format',
  templateUrl: './list-format.component.html',
  styleUrls: ['./list-format.component.scss']
})
export class ListFormatComponent implements OnInit {

  @Input() config;
    constructor() {}

    ngOnInit(): void {
    }

    returnZero(): number {
      return 0;
  }
}
