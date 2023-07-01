import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-note-format',
  templateUrl: './note-format.component.html',
  styleUrls: ['./note-format.component.scss']
})
export class NoteFormatComponent implements OnInit {

  @Input() config;
  constructor() {}

  ngOnInit(): void {
  }

}
