import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Cocktail } from 'src/app/interfaces/cocktail.interface';

@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.scss'],
})
export class CocktailListComponent implements OnInit {
  @Input() cocktails?: Cocktail[];
  @Output() changeCocktail: EventEmitter<number> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  selectCocktail(index: number): void {
    this.changeCocktail.emit(index);
  }
}
