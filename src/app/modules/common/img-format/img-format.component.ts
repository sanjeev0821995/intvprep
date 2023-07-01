import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-img-format',
  templateUrl: './img-format.component.html',
  styleUrls: ['./img-format.component.scss']
})
export class ImgFormatComponent implements OnInit {

  @Input() config;
    constructor() {}

    ngOnInit(): void {
    }

}
