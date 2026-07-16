import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit, inject } from '@angular/core';
import { ApplicationConfigService } from '../shared/application-config.service';
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
export class HomeComponent implements OnInit {
  randomNeutralBuildings!: Tile[];
  randomPlayerBuildings!: Tile[];
  randomHarborMasters!: Tile[];
  playerCount!: number;
  playerCountList!: PlayerCountOption[];
  randomDeckbuildingModules!: string[];
  isXSmall!: boolean;
  isMax1280!: boolean;

  private readonly applicationConfigService = inject(ApplicationConfigService);
  private readonly responsive = inject(BreakpointObserver);
  private readonly storage = inject(StorageMap);

  ngOnInit(): void {
    this.playerCount = 2;
    this.playerCountList = [
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
    ];

    this.responsive.observe(Breakpoints.XSmall).subscribe((result) => {
      if (result.matches) {
        this.isXSmall = true;
      } else {
        this.isXSmall = false;
      }
    });

    this.responsive.observe('(max-width: 1280px)').subscribe((result) => {
      if (result.matches) {
        this.isMax1280 = true;
      } else {
        this.isMax1280 = false;
      }
    });

    this.storage.get('rar-playerCount').subscribe((playerCount) => {
      if (playerCount && typeof playerCount === 'number') {
        this.emitPlayerCount(playerCount);
      } else {
        this.storage.set('rar-playerCount', 2).subscribe();
      }
    });

    this.applicationConfigService.playerCount.subscribe(
      (playerCount: number) => {
        this.playerCount = playerCount;
      }
    );

    this.randomizeSetup();
  }

  emitPlayerCount(playerCount: number) {
    this.applicationConfigService.playerCount.emit(playerCount);
  }

  onPlayerCountChange(event: MatSelectChange) {
    this.storage.set('rar-playerCount', event.value).subscribe();
    this.emitPlayerCount(event.value);
  }

  randomizeSetup() {
    this.randomNeutralBuildings =
      this.applicationConfigService.getRandomNeutralBuildingOrder();

    this.randomHarborMasters =
      this.applicationConfigService.getRandomHarborMasters();

    this.randomDeckbuildingModules =
      this.applicationConfigService.getRandomDeckbuildingModules();

    this.randomPlayerBuildings =
      this.applicationConfigService.getRandomPlayerBuildings();
  }
}
