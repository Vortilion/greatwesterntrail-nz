import { Component } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';

@Component({
    selector: 'app-language-selector',
    templateUrl: './language-selector.component.html',
    styleUrls: ['./language-selector.component.scss'],
})
export class LanguageSelectorComponent {
    activeLang: any;

    constructor(private translocoService: TranslocoService) {
        this.activeLang = this.translocoService.getActiveLang();
    }

    changeLanguage(lang: string): void {
        this.translocoService.setActiveLang(lang);
        this.activeLang = this.translocoService.getActiveLang();
    }
}
