import {Component, OnDestroy, OnInit} from '@angular/core';
import {Ingredient} from '../shared/models/ingredient.model';
import {ShoppingListService} from '../shared/services/shopping-list.service';
import {Subscription} from 'rxjs/Subscription';
// put shoppingListService to app.module.ts but not here in order to expose all components

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})

export class ShoppingListComponent implements OnInit, OnDestroy {
  /* move the following to shopping-list.service
  ingredients: Ingredient[]= [
    new Ingredient('Yogurt', 5),
    new Ingredient('Broccoli', 10)
  ]; */

  ingredients: Ingredient[];
  // method 3: use subject
  private subscription: Subscription;

  constructor(private slService: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.slService.getIngredients();
    // method 3: use subject
    this.subscription = this.slService.ingredientChanged.subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
      }
    )
  }

  // method 3: use subject
  ngOnDestroy() {
    this.subscription.unsubscribe(); // prevent memory leak
  }
  // (ingredients: Ingredient[]) => { }
  // function(ingredient: Ingredient[]) { }
  /* Use method 3: shoppinglist service => the following function is not needed
  onIngredientAdded(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  } */
}
