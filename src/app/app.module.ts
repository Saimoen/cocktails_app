// modules
import { APP_ROUTES } from './app.routes';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

// composants
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { CocktailListComponent } from './component/cocktails-container/cocktail-list/cocktail-list.component';
import { CocktailDetailsComponent } from './component/cocktails-container/cocktail-details/cocktail-details.component';
import { CocktailsContainerComponent } from './component/cocktails-container/cocktails-container.component';
import { SelectedDirective } from './shared/directives/selected.directive';
import { PanierContainerComponent } from './component/panier-container/panier-container.component';
import { IngredientListComponent } from './component/panier-container/ingredient-list/ingredient-list.component';
import { CocktailFormComponent } from './component/cocktails-container/cocktail-form/cocktail-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CocktailListComponent,
    CocktailDetailsComponent,
    CocktailsContainerComponent,
    SelectedDirective,
    PanierContainerComponent,
    IngredientListComponent,
    CocktailFormComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(APP_ROUTES),
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
