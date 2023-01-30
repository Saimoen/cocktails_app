import { Subscription } from 'rxjs';
import { PanierService } from './../../shared/services/panier.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from 'src/app/shared/interfaces/ingredient.interface';

@Component({
  selector: 'app-panier-container',
  templateUrl: './panier-container.component.html',
  styleUrls: ['./panier-container.component.scss'],
})
export class PanierContainerComponent implements OnInit, OnDestroy {
  public ingredients: Ingredient[] | null = [];
  public subscription?: Subscription;

  constructor(private panierService: PanierService) {}

  ngOnInit(): void {
    this.subscription = this.panierService.ingredients$.subscribe(
      (ingredients: Ingredient[] | null) => {
        this.ingredients = ingredients;
      }
    );
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
