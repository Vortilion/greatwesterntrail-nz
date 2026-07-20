import { CommonModule } from '@angular/common';
import { Component, inject, signal, afterNextRender } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import {
  TranslocoModule,
  TranslocoService,
  getBrowserLang,
} from '@jsverse/transloco';

@Component({
  selector: 'app-language-selector',
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    TranslocoModule,
  ],
  templateUrl: './language-selector.component.html',
  styleUrls: ['./language-selector.component.scss'],
})
export class LanguageSelectorComponent {
  private translocoService = inject(TranslocoService);

  activeLang = signal<string>('');
  availableLangs = signal<ReturnType<TranslocoService['getAvailableLangs']>>([]);

  constructor() {
    const browserLang = getBrowserLang();
    const availableLangs = this.translocoService.getAvailableLangs();
    this.availableLangs.set(availableLangs);

    if (browserLang && this.translocoService.isLang(browserLang)) {
      this.activeLang.set(browserLang);
      if (this.translocoService.getActiveLang() !== browserLang) {
        afterNextRender(() => {
          this.translocoService.setActiveLang(browserLang);
        });
      }
    } else {
      const defaultLang = this.translocoService.getDefaultLang();
      this.activeLang.set(defaultLang);
    }
  }

  changeLanguage(lang: string | unknown): void {
    if (typeof lang === 'string') {
      this.translocoService.setActiveLang(lang);
      this.activeLang.set(this.translocoService.getActiveLang());
    }
  }
}
