import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { ApplicationConfigService } from '../shared/application-config.service';
import { Tile } from '../models/tile.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  randomNeutralBuildings: Tile[];
  randomPlayerBuildings: Tile[];
  randomHarborMasters: Tile[];
  randomDeckbuildingModules: string[];
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

    this.randomizeSetup();
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
