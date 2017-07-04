// shopping-list.service.ts

import {Ingredient} from '../models/ingredient.model';
import {EventEmitter} from '@angular/core';
import {Subject} from 'rxjs/Subject';

export class ShoppingListService {

  /* An Observable is only allows for subscribing,
     while a Subject allows for publishing and subscribing (a subject is an observable).
     Subject allows your service to be used as both a publisher and a subscriber
  */

  ingredientChanged = new Subject<Ingredient[]>();
  /* method 3: use subject (which is a kind of Observable) instead of EventEmitter
  ingredientChanged = new EventEmitter<Ingredient[]>();
  */
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

    this.ingredientChanged.next(this.ingredients.slice());
    /*  method 3: use subject => change emit to next
    subject.next() is used to send messages to an observable
    which are then sent to all subscribers of that observable
    this.ingredientChanged.emit(this.ingredients.slice()); */
  }

  addIngredientsFromRecipe(ingredients: Ingredient[]) {
    /* method 1
    for (let ingredient of ingredients) {
      this.addIngredient(ingredient);
    } */
    // method 2 ... three dots to convert the array into a list
    this.ingredients.push(...ingredients);

    this.ingredientChanged.next(this.ingredients.slice());
    /*  method 3: use subject => change emit to next
     this.ingredientChanged.emit(this.ingredients.slice()); */
  }
}
