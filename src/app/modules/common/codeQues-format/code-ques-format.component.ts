import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-code-ques-format',
    templateUrl: './code-ques-format.component.html',
    styleUrls: ['./code-ques-format.component.scss'],
})
export class CodeQuesFormatComponent implements OnInit {
    @Input() config;
    panelOpenState: boolean = false;
    constructor() {}
    ngOnInit(): void {}
}
