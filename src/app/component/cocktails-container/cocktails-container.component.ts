import { CocktailService } from './../../shared/services/cocktail.service';
import { Component } from '@angular/core';
import { Cocktail } from 'src/app/shared/interfaces/cocktail.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cocktails-container',
  templateUrl: './cocktails-container.component.html',
  styleUrls: ['./cocktails-container.component.scss'],
})
export class CocktailsContainerComponent {
  public cocktails$: Observable<Cocktail[]> = this.cocktailService.cocktails$;

  constructor(private cocktailService: CocktailService) {}
}
