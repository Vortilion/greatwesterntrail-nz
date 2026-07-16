import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, Input, OnInit, inject } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenav } from '@angular/material/sidenav';
import { TranslocoPipe } from '@jsverse/transloco';
import { LanguageSelectorComponent } from '../language-selector/language-selector.component';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss'],
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, TranslocoPipe, LanguageSelectorComponent],
})
export class PageHeaderComponent implements OnInit {
  @Input() sidebarHandle: MatSidenav | undefined;
  isXSmall!: boolean;

  private readonly responsive = inject(BreakpointObserver);

  ngOnInit(): void {
    this.responsive.observe(Breakpoints.XSmall).subscribe((result) => {
      if (result.matches) {
        this.isXSmall = true;
      } else {
        this.isXSmall = false;
      }
    });
  }
}
