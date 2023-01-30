import { CocktailService } from './../../shared/services/cocktail.service';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Cocktail } from 'src/app/shared/interfaces/cocktail.interface';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cocktails-container',
  templateUrl: './cocktails-container.component.html',
  styleUrls: ['./cocktails-container.component.scss'],
})
export class CocktailsContainerComponent implements OnInit, OnDestroy {
  @Input() cocktails: Cocktail[] = [];

  public subscription?: Subscription = new Subscription();

  constructor(private cocktailService: CocktailService) {}

  ngOnInit(): void {
    this.subscription?.add(
      this.cocktailService.cocktails$.subscribe((cocktails: Cocktail[]) => {
        this.cocktails = cocktails;
      })
    );
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
