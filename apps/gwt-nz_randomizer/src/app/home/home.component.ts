import {
  BreakpointObserver,
  Breakpoints,
  MediaMatcher,
} from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { StorageMap } from '@ngx-pwa/local-storage';
import { ApplicationConfigService } from '../shared/application-config.service';
import { Tile } from '../models/tile.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  randomNeutralBuildings: Tile[];
  randomHarborMasters: Tile[];
  isXSmall: boolean;
  isMax768: boolean;

  constructor(
    private applicationConfigService: ApplicationConfigService,
    private responsive: BreakpointObserver,
  ) {}

  ngOnInit(): void {
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

    this.randomNeutralBuildings =
      this.applicationConfigService.getRandomNeutralBuildingOrder();
    this.randomHarborMasters =
      this.applicationConfigService.getRandomHarborMasters();
  }

  randomizeSetup() {
    this.randomNeutralBuildings =
      this.applicationConfigService.getRandomNeutralBuildingOrder();

    this.randomHarborMasters =
      this.applicationConfigService.getRandomHarborMasters();
  }

  ngOnDestroy(): void {}
}
