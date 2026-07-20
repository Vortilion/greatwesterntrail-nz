import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, inject, input } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenav } from '@angular/material/sidenav';
import { TranslocoPipe } from '@jsverse/transloco';
import { LanguageSelectorComponent } from '../language-selector/language-selector.component';
import { map } from 'rxjs';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss'],
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, TranslocoPipe, LanguageSelectorComponent],
})
export class PageHeaderComponent {
  readonly sidebarHandle = input<MatSidenav | undefined>(undefined);

  private readonly responsive = inject(BreakpointObserver);
  readonly isXSmall = toSignal(
    this.responsive.observe(Breakpoints.XSmall).pipe(map((result) => result.matches)),
    { initialValue: false }
  );
}
