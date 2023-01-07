import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { CocktailListComponent } from './component/cocktails-container/cocktail-list/cocktail-list.component';
import { CocktailDetailsComponent } from './component/cocktails-container/cocktail-details/cocktail-details.component';
import { CocktailsContainerComponent } from './component/cocktails-container/cocktails-container.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CocktailListComponent,
    CocktailDetailsComponent,
    CocktailsContainerComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
