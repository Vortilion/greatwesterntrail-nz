import { EventEmitter, Injectable } from '@angular/core';
import { Tile, TileSide } from '../models/tile.model';

@Injectable({
  providedIn: 'root',
})
export class ApplicationConfigService {
  playerCount = new EventEmitter<number>();
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
          image: 'assets/img/harbormaster-01.png',
        },
      ],
    },
    {
      title: '2',
      sides: [
        {
          title: 'front',
          image: 'assets/img/harbormaster-02.png',
        },
      ],
    },
    {
      title: '3',
      sides: [
        {
          title: 'front',
          image: 'assets/img/harbormaster-03.png',
        },
      ],
    },
    {
      title: '4',
      sides: [
        {
          title: 'front',
          image: 'assets/img/harbormaster-04.png',
        },
      ],
    },
    {
      title: '5',
      sides: [
        {
          title: 'front',
          image: 'assets/img/harbormaster-05.png',
        },
      ],
    },
    {
      title: '6',
      sides: [
        {
          title: 'front',
          image: 'assets/img/harbormaster-06.png',
        },
      ],
    },
    {
      title: '7',
      sides: [
        {
          title: 'front',
          image: 'assets/img/harbormaster-07.png',
        },
      ],
    },
    {
      title: '8',
      sides: [
        {
          title: 'front',
          image: 'assets/img/harbormaster-08.png',
        },
      ],
    },
  ];

  getRandomNeutralBuildingOrder(): Tile[] {
    return this.shuffleArray(this.neutralBuildings);
  }

  getRandomHarborMasters(): Tile[] {
    let selection: Tile[] = [];
    let shuffledHarborMasters = this.shuffleArray(this.harborMasters);

    for (let i = 0; i < 5; i++) {
      selection.push(shuffledHarborMasters.pop());
    }

    return selection;
  }

  getRandomDeckbuildingModules(): string[] {
    let selection: string[] = [];
    let shuffledDeckbuildingModules = this.shuffleArray(
      this.deckBuildingModules,
    );

    for (let i = 0; i < 4; i++) {
      selection.push(shuffledDeckbuildingModules.pop());
    }

    return selection.sort((a, b) => {
      return parseInt(a) - parseInt(b);
    });
  }

  getRandomPlayerBuildings(): Tile[] {
    let playerBuildings = [...this.playerBuildings];

    playerBuildings.forEach((playerBuilding) => {
      playerBuilding.sides = playerBuilding.sides.splice(
        Math.random() * playerBuilding.sides.length,
      );
    });

    return playerBuildings;
  }

  private shuffleArray(inArray: any[]): any[] {
    let returnArray = inArray.slice();

    for (
      var j, x, i = returnArray.length;
      i;
      j = Math.floor(Math.random() * i),
        x = returnArray[--i],
        returnArray[i] = returnArray[j],
        returnArray[j] = x
    );
    return returnArray;
  }
}
