import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-code-format',
  templateUrl: './code-format.component.html',
  styleUrls: ['./code-format.component.scss']
})
export class CodeFormatComponent implements OnInit {
  @Input() config;
  panelOpenState: boolean =false;
  constructor() { }
  ngOnInit(): void {
  }
}
