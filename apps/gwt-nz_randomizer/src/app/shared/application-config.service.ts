import { EventEmitter, Injectable } from '@angular/core';
import { Tile } from '../models/tile.model';

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
          image: 'src/assets/img/harbormaster-01.jpg',
        },
      ],
    },
    {
      title: '2',
      sides: [
        {
          title: 'front',
          image: 'src/assets/img/harbormaster-02.jpg',
        },
      ],
    },
    {
      title: '3',
      sides: [
        {
          title: 'front',
          image: 'src/assets/img/harbormaster-03.jpg',
        },
      ],
    },
    {
      title: '4',
      sides: [
        {
          title: 'front',
          image: 'src/assets/img/harbormaster-04.jpg',
        },
      ],
    },
    {
      title: '5',
      sides: [
        {
          title: 'front',
          image: 'src/assets/img/harbormaster-05.jpg',
        },
      ],
    },
    {
      title: '6',
      sides: [
        {
          title: 'front',
          image: 'src/assets/img/harbormaster-06.jpg',
        },
      ],
    },
    {
      title: '7',
      sides: [
        {
          title: 'front',
          image: 'src/assets/img/harbormaster-07.jpg',
        },
      ],
    },
    {
      title: '8',
      sides: [
        {
          title: 'front',
          image: 'src/assets/img/harbormaster-08.jpg',
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
