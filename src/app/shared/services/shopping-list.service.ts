// shopping-list.service.ts

import {Ingredient} from '../models/ingredient.model';
import {EventEmitter} from '@angular/core';

export class ShoppingListService {
  ingredientChanged = new EventEmitter<Ingredient[]>();

  private ingredients: Ingredient[]= [
    new Ingredient('Yogurt', 5),
    new Ingredient('Broccoli', 10)
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    // console.log(ingredient);
    this.ingredientChanged.emit(this.ingredients.slice());
  }
}
