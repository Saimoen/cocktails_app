import { Cocktail } from '../interfaces/cocktail.interface';
import { Injectable } from '@angular/core';
import {
  BehaviorSubject,
  tap,
  Observable,
  filter,
  map,
  Subscription,
} from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CocktailService {
  public cocktails$: BehaviorSubject<Cocktail[] | []> = new BehaviorSubject<
    Cocktail[] | []
  >([]);

  public getCocktail(index: number): Observable<Cocktail> {
    return this.cocktails$.pipe(
      filter((cocktail: Cocktail[]) => cocktail !== null),
      // first(), coupe les flux de données
      map((cocktails: Cocktail[]) => {
        return cocktails[index];
      })
    );
  }

  public addCocktail(cocktail: Cocktail): Observable<Cocktail> {
    return this.http
      .post<Cocktail>('https://restapi.fr/api/cocktails', cocktail)
      .pipe(
        tap((savedCocktail: Cocktail) => {
          const value = this.cocktails$.value;
          this.cocktails$.next([...value, savedCocktail]);
        })
      );
  }

  public editCocktail(
    cocktailId: any,
    editedCocktail: Cocktail
  ): Observable<Cocktail> {
    return this.http
      .patch<Cocktail>(
        `https://restapi.fr/api/cocktails/${cocktailId}`,
        editedCocktail
      )
      .pipe(
        tap((savedCocktail: Cocktail) => {
          const value = this.cocktails$.value;
          this.cocktails$.next(
            value.map((cocktail: Cocktail) => {
              if (cocktail.name === savedCocktail.name) {
                return savedCocktail;
              } else {
                return cocktail;
              }
            })
          );
        })
      );
  }

  constructor(private http: HttpClient) {
    // this.seed(); pour poster des cocktails sur l'API restapi.fr/api/cocktails
  }

  public fetchCocktails(): Observable<Cocktail[]> {
    return this.http.get('https://restapi.fr/api/cocktails').pipe(
      tap((cocktail: any) => {
        this.cocktails$.next(cocktail);
      })
    );
  }

  public seed() {
    this.http
      .post('https://restapi.fr/api/cocktails', {
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
      })
      .subscribe();
    this.http
      .post('https://restapi.fr/api/cocktails', {
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
      })
      .subscribe();
    this.http
      .post('https://restapi.fr/api/cocktails', {
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
      })
      .subscribe();
  }
}
