import { CocktailFormComponent } from './component/cocktails-container/cocktail-form/cocktail-form.component';
import { CocktailDetailsComponent } from './component/cocktails-container/cocktail-details/cocktail-details.component';
import { PanierContainerComponent } from './component/panier-container/panier-container.component';
import { CocktailsContainerComponent } from './component/cocktails-container/cocktails-container.component';
import { Routes } from '@angular/router';

export const APP_ROUTES: Routes = [
  { path: '', redirectTo: 'cocktails', pathMatch: 'full' },
  {
    path: 'cocktails',
    component: CocktailsContainerComponent,
    children: [
      { path: 'new', component: CocktailFormComponent },
      { path: ':index/edit', component: CocktailFormComponent },
      { path: ':index', component: CocktailDetailsComponent },
      { path: '', redirectTo: '0', pathMatch: 'full' },
    ],
  },
  { path: 'panier', component: PanierContainerComponent },
];
