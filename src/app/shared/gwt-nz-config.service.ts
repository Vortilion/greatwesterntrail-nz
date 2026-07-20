import { Injectable, signal } from '@angular/core';
import { Tile } from '../models/tile.model';

@Injectable({
  providedIn: 'root',
})
export class GwtNzConfigService {
  private readonly _playerCount = signal(2);
  readonly playerCount = this._playerCount.asReadonly();

  setPlayerCount(playerCount: number): void {
    this._playerCount.set(playerCount);
  }

  neutralBuildings: Tile[] = [
    {
      title: 'A',
      sides: [
        {
          title: 'front',
        },
      ],
    },
    {
      title: 'B',
      sides: [
        {
          title: 'front',
        },
      ],
    },
    {
      title: 'C',
      sides: [
        {
          title: 'front',
        },
      ],
    },
    {
      title: 'D',
      sides: [
        {
          title: 'front',
        },
      ],
    },
    {
      title: 'E',
      sides: [
        {
          title: 'front',
        },
      ],
    },
    {
      title: 'F',
      sides: [
        {
          title: 'front',
        },
      ],
    },
    {
      title: 'G',
      sides: [
        {
          title: 'front',
        },
      ],
    },
    {
      title: 'H',
      sides: [
        {
          title: 'front',
        },
      ],
    },
  ];
  playerBuildings: Tile[] = [
    {
      title: '1',
      sides: [
        {
          title: 'a',
        },
        {
          title: 'b',
        },
      ],
    },
    {
      title: '2',
      sides: [
        {
          title: 'a',
        },
        {
          title: 'b',
        },
      ],
    },
    {
      title: '3',
      sides: [
        {
          title: 'a',
        },
        {
          title: 'b',
        },
      ],
    },
    {
      title: '4',
      sides: [
        {
          title: 'a',
        },
        {
          title: 'b',
        },
      ],
    },
    {
      title: '5',
      sides: [
        {
          title: 'a',
        },
        {
          title: 'b',
        },
      ],
    },
    {
      title: '6',
      sides: [
        {
          title: 'a',
        },
        {
          title: 'b',
        },
      ],
    },
    {
      title: '7',
      sides: [
        {
          title: 'a',
        },
        {
          title: 'b',
        },
      ],
    },
    {
      title: '8',
      sides: [
        {
          title: 'a',
        },
        {
          title: 'b',
        },
      ],
    },
    {
      title: '9',
      sides: [
        {
          title: 'a',
        },
        {
          title: 'b',
        },
      ],
    },
    {
      title: '10',
      sides: [
        {
          title: 'a',
        },
        {
          title: 'b',
        },
      ],
    },
  ];
  deckBuildingModules = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
  harborMasters: Tile[] = [
    {
      title: '1',
      sides: [
        {
          title: 'front',
          image: 'img/harbormaster-01.png',
        },
      ],
    },
    {
      title: '2',
      sides: [
        {
          title: 'front',
          image: 'img/harbormaster-02.png',
        },
      ],
    },
    {
      title: '3',
      sides: [
        {
          title: 'front',
          image: 'img/harbormaster-03.png',
        },
      ],
    },
    {
      title: '4',
      sides: [
        {
          title: 'front',
          image: 'img/harbormaster-04.png',
        },
      ],
    },
    {
      title: '5',
      sides: [
        {
          title: 'front',
          image: 'img/harbormaster-05.png',
        },
      ],
    },
    {
      title: '6',
      sides: [
        {
          title: 'front',
          image: 'img/harbormaster-06.png',
        },
      ],
    },
    {
      title: '7',
      sides: [
        {
          title: 'front',
          image: 'img/harbormaster-07.png',
        },
      ],
    },
    {
      title: '8',
      sides: [
        {
          title: 'front',
          image: 'img/harbormaster-08.png',
        },
      ],
    },
  ];

  getRandomNeutralBuildingOrder(): Tile[] {
    return this.shuffleArray(this.neutralBuildings);
  }

  getRandomHarborMasters(): Tile[] {
    const selection: Tile[] = [];
    const shuffledHarborMasters = this.shuffleArray(this.harborMasters);

    for (let i = 0; i < 5; i++) {
      const harborMaster = shuffledHarborMasters.pop();

      if (harborMaster) {
        selection.push(harborMaster);
      }
    }

    return selection;
  }

  getRandomDeckbuildingModules(): string[] {
    const selection: string[] = [];
    const shuffledDeckbuildingModules = this.shuffleArray(
      this.deckBuildingModules
    );

    for (let i = 0; i < 4; i++) {
      const deckbuildingModule = shuffledDeckbuildingModules.pop();

      if (deckbuildingModule) {
        selection.push(deckbuildingModule);
      }
    }

    return selection.sort((a, b) => {
      return parseInt(a) - parseInt(b);
    });
  }

  getRandomPlayerBuildings(): Tile[] {
    const playerBuildings = JSON.parse(JSON.stringify(this.playerBuildings));

    playerBuildings.forEach((playerBuilding: Tile) => {
      playerBuilding.sides.splice(
        Math.floor(Math.random() * playerBuilding.sides.length),
        1
      );
    });

    return playerBuildings;
  }

  private shuffleArray<T>(inArray: T[]): T[] {
    const returnArray = inArray.slice();

    for (let i = returnArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const current = returnArray[i]!;

      returnArray[i] = returnArray[j]!;
      returnArray[j] = current;
    }

    return returnArray;
  }
}
