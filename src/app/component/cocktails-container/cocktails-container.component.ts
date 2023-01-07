import { Component, Input, OnInit } from '@angular/core';
import { Cocktail } from 'src/app/interfaces/cocktail.interface';

@Component({
  selector: 'app-cocktails-container',
  templateUrl: './cocktails-container.component.html',
  styleUrls: ['./cocktails-container.component.scss'],
})
export class CocktailsContainerComponent implements OnInit {
  @Input() cocktails: Cocktail[] = [
    {
      name: 'Mojito pastèque',
      img: 'https://cocktailand.fr/media/cache/resolve/large/images/cocktails/546.jpg',
      description:
        'Le mojito pastèque est un cocktail à base de rhum, de pastèque de citron vert et de feuilles de menthe fraîche. Le cocktail est très agréable par des températures élevées.',
    },
    {
      name: 'Mojito fraise',
      img: 'https://cocktailand.fr/media/cache/resolve/large/images/cocktails/542.jpg',
      description:
        'Le mojito fraise est un cocktail très rafraichissant et très apprécié dans les bars branchés.',
    },
    {
      name: 'Mojito despérados',
      img: 'https://cocktailand.fr/media/cache/resolve/large/images/cocktails/547.jpg',
      description:
        'Habile mélange du rhum blanc et de la bière, le Mojito Desperados mixe les saveurs pour un cocktail débordant de fraîcheur et d’arômes.',
    },
  ];

  @Input() cocktail: Cocktail = {
    name: 'Mojito pastèque',
    img: 'https://cocktailand.fr/media/cache/resolve/large/images/cocktails/546.jpg',
    description:
      'Le mojito pastèque est un cocktail à base de rhum, de pastèque de citron vert et de feuilles de menthe fraîche. Le cocktail est très agréable par des températures élevées.',
  };

  selectedCocktail?: Cocktail;

  constructor() {}

  ngOnInit(): void {
    this.selectedCocktail = this.cocktails[0];
  }

  selectCocktail(index: number): void {
    this.selectedCocktail = this.cocktails[index];
  }
}
