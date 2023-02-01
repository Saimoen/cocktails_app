import { CocktailService } from './../../../shared/services/cocktail.service';
import { PanierService } from './../../../shared/services/panier.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Cocktail } from 'src/app/shared/interfaces/cocktail.interface';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cocktail-details',
  templateUrl: './cocktail-details.component.html',
  styleUrls: ['./cocktail-details.component.scss'],
})
export class CocktailDetailsComponent implements OnInit, OnDestroy {
  public cocktail!: Cocktail;
  public subscription?: Subscription;

  constructor(
    private panierService: PanierService,
    private cocktailService: CocktailService,
    private activatedRoute: ActivatedRoute
  ) {
    this.cocktailService
      .getCocktail(+this.activatedRoute.snapshot.paramMap.get('index')!)
      .subscribe();
  }

  ngOnInit(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.cocktailService
        .getCocktail(+paramMap.get('index')!)
        .subscribe((cocktail: Cocktail) => (this.cocktail = cocktail));
    });
  }

  public addToPanier(): void {
    this.panierService.addToPanier(this.cocktail?.ingredients);
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
