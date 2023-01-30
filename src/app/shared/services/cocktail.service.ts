import { Cocktail } from '../interfaces/cocktail.interface';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CocktailService {
  public cocktails$: BehaviorSubject<Cocktail[]> = new BehaviorSubject([
    {
      name: 'Mojito pastèque',
      img: 'https://cocktailand.fr/media/cache/resolve/large/images/cocktails/546.jpg',
      description:
        'Le mojito pastèque est un cocktail à base de rhum, de pastèque de citron vert et de feuilles de menthe fraîche. Le cocktail est très agréable par des températures élevées.',
      ingredients: [
        {
          name: 'Perrier',
          quantity: 1,
        },
        {
          name: 'Jus de pastèque',
          quantity: 2,
        },
        {
          name: 'Rhum',
          quantity: 2,
        },
      ],
    },
    {
      name: 'Mojito fraise',
      img: 'https://cocktailand.fr/media/cache/resolve/large/images/cocktails/542.jpg',
      description:
        'Le mojito fraise est un cocktail très rafraichissant et très apprécié dans les bars branchés.',
      ingredients: [
        {
          name: 'Perrier',
          quantity: 2,
        },
        {
          name: 'Jus de fraise',
          quantity: 2,
        },
        {
          name: 'Rhum',
          quantity: 1,
        },
      ],
    },
    {
      name: 'Mojito despérados',
      img: 'https://cocktailand.fr/media/cache/resolve/large/images/cocktails/547.jpg',
      description:
        'Habile mélange du rhum blanc et de la bière, le Mojito Desperados mixe les saveurs pour un cocktail débordant de fraîcheur et d’arômes.',
      ingredients: [
        {
          name: 'Perrier',
          quantity: 2,
        },
        {
          name: 'Bière Despérados',
          quantity: 3,
        },
        {
          name: 'Rhum',
          quantity: 1,
        },
      ],
    },
  ]);

  public getCocktail(index: number) {
    const cocktails = this.cocktails$.value;
    return cocktails[index];
  }

  public addCocktail(cocktail: Cocktail): void {
    const value = this.cocktails$.value;
    this.cocktails$.next([...value, cocktail]);
  }

  public editCocktail(editedCocktail: Cocktail): void {
    const value = this.cocktails$.value;
    this.cocktails$.next(
      value.map((cocktail: Cocktail) => {
        if (cocktail.name === editedCocktail.name) {
          return editedCocktail;
        } else {
          return cocktail;
        }
      })
    );
  }

  constructor() {
    console.log(this.cocktails$.value);
  }
}
