import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-detail-view',
  templateUrl: './detail-view.component.html',
  styleUrls: ['./detail-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class DetailViewComponent implements OnInit {
  data: string;
  html: SafeHtml;

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.data = JSON.parse(localStorage.getItem("detailed_content"));
    this.html = this.sanitizer.bypassSecurityTrustHtml(this.data['htmlContent']);
  }

}
