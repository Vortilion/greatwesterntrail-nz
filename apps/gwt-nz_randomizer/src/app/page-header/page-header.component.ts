import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss'],
})
export class PageHeaderComponent implements OnInit {
  @Input() sidebarHandle: any;
  isXXSmall: boolean;
  isXSmall: boolean;
  isMax768: boolean;

  constructor(private responsive: BreakpointObserver) {}

  ngOnInit(): void {
    this.responsive.observe('(max-width: 480px)').subscribe((result) => {
      if (result.matches) {
        this.isXXSmall = true;
      } else {
        this.isXXSmall = false;
      }
    });

    this.responsive.observe(Breakpoints.XSmall).subscribe((result) => {
      if (result.matches) {
        this.isXSmall = true;
      } else {
        this.isXSmall = false;
      }
    });

    this.responsive.observe('(max-width: 768px)').subscribe((result) => {
      if (result.matches) {
        this.isMax768 = true;
      } else {
        this.isMax768 = false;
      }
    });
  }
}
