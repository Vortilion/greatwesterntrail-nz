import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { GwtNzConfigService } from '../shared/gwt-nz-config.service';
import { Tile } from '../models/tile.model';
import { StorageMap } from '@ngx-pwa/local-storage';
import { PlayerCountOption } from '../models/player-count-option.model';
import { MatSelectChange, MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDividerModule } from '@angular/material/divider';
import { TranslocoDirective } from '@jsverse/transloco';
import { PageHeaderComponent } from '../page-header/page-header.component';
import { PageFooterComponent } from '../page-footer/page-footer.component';
import { firstValueFrom, map } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [
    MatSidenavModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    MatDividerModule,
    TranslocoDirective,
    PageHeaderComponent,
    PageFooterComponent,
  ],
})
export class HomeComponent {
  private readonly _randomNeutralBuildings = signal<Tile[]>([]);
  readonly randomNeutralBuildings = this._randomNeutralBuildings.asReadonly();

  private readonly _randomPlayerBuildings = signal<Tile[]>([]);
  readonly randomPlayerBuildings = this._randomPlayerBuildings.asReadonly();

  private readonly _randomHarborMasters = signal<Tile[]>([]);
  readonly randomHarborMasters = this._randomHarborMasters.asReadonly();

  private readonly _randomDeckbuildingModules = signal<string[]>([]);
  readonly randomDeckbuildingModules = this._randomDeckbuildingModules.asReadonly();

  readonly playerCountList = signal<PlayerCountOption[]>([
    {
      label: '2',
      value: 2,
    },
    {
      label: '3',
      value: 3,
    },
    {
      label: '4',
      value: 4,
    },
  ]);

  private readonly gwtNzConfigService = inject(GwtNzConfigService);
  private readonly responsive = inject(BreakpointObserver);
  private readonly storage = inject(StorageMap);
  readonly playerCount = this.gwtNzConfigService.playerCount;
  readonly isXSmall = toSignal(
    this.responsive.observe(Breakpoints.XSmall).pipe(map((result) => result.matches)),
    { initialValue: false }
  );
  readonly isMax1280 = toSignal(
    this.responsive.observe('(max-width: 1280px)').pipe(map((result) => result.matches)),
    { initialValue: false }
  );

  constructor() {
    void this.initializePlayerCount();

    this.randomizeSetup();
  }

  private async initializePlayerCount(): Promise<void> {
    const persistedPlayerCount = await firstValueFrom(this.storage.get('rar-playerCount'));

    if (typeof persistedPlayerCount === 'number') {
      this.gwtNzConfigService.setPlayerCount(persistedPlayerCount);
      return;
    }

    this.gwtNzConfigService.setPlayerCount(2);
    await firstValueFrom(this.storage.set('rar-playerCount', 2));
  }

  async onPlayerCountChange(event: MatSelectChange): Promise<void> {
    const playerCount = Number(event.value);

    this.gwtNzConfigService.setPlayerCount(playerCount);
    await firstValueFrom(this.storage.set('rar-playerCount', playerCount));
  }

  randomizeSetup(): void {
    this._randomNeutralBuildings.set(this.gwtNzConfigService.getRandomNeutralBuildingOrder());

    this._randomHarborMasters.set(this.gwtNzConfigService.getRandomHarborMasters());

    this._randomDeckbuildingModules.set(this.gwtNzConfigService.getRandomDeckbuildingModules());

    this._randomPlayerBuildings.set(this.gwtNzConfigService.getRandomPlayerBuildings());
  }
}
