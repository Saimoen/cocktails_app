import { CocktailService } from './../../../shared/services/cocktail.service';
import { PanierService } from './../../../shared/services/panier.service';
import { Component, OnInit } from '@angular/core';
import { Cocktail } from 'src/app/shared/interfaces/cocktail.interface';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-cocktail-details',
  templateUrl: './cocktail-details.component.html',
  styleUrls: ['./cocktail-details.component.scss'],
})
export class CocktailDetailsComponent implements OnInit {
  public cocktail: Cocktail;

  constructor(
    private panierService: PanierService,
    private cocktailService: CocktailService,
    private activatedRoute: ActivatedRoute
  ) {
    this.cocktail = this.cocktailService.getCocktail(
      +this.activatedRoute.snapshot.paramMap.get('index')!
    );
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.cocktail = this.cocktailService.getCocktail(+paramMap.get('index')!);
    });
  }

  public addToPanier(): void {
    this.panierService.addToPanier(this.cocktail?.ingredients);
  }
}
