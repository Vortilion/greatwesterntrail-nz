import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideTransloco } from '@jsverse/transloco';
import { TranslocoHttpLoader } from '../transloco/transloco-loader';
import { provideHttpClient } from '@angular/common/http';

import { LanguageSelectorComponent } from './language-selector.component';

describe('LanguageSelectorComponent', () => {
    let component: LanguageSelectorComponent;
    let fixture: ComponentFixture<LanguageSelectorComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [LanguageSelectorComponent],
            providers: [
                provideHttpClient(),
                provideTransloco({
                    config: { availableLangs: ['en'], defaultLang: 'en', prodMode: true },
                    loader: TranslocoHttpLoader,
                }),
            ],
        }).compileComponents();

        fixture = TestBed.createComponent(LanguageSelectorComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
