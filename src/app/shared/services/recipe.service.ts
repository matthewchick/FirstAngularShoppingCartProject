// recipe.service.ts

import {Recipe} from '../models/recipe.model';
import {EventEmitter, Injectable} from '@angular/core';
import {Ingredient} from '../models/ingredient.model';
import {ShoppingListService} from './shopping-list.service';

// call ShoppingListService so we use @Injectable() => DI
@Injectable()
export class RecipeService {
  // method 2: event -binding
  recipeSelected = new EventEmitter<Recipe>();

  // data encapsulation
  private recipes: Recipe[] = [
    new Recipe('Roasted-broccoli',
      'Stalks with a nutty tahini yogurt and Puy lentils',
      'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe/recipe-image/2017/05/roasted-broccoli.jpg',
    [
      new Ingredient('broccoli', 10),
      new Ingredient('yogurt', 2)
    ]),
    new Recipe('Courgette & halloumi skewers',
      'Marinade cheese with mint, lemon and olive oil',
      'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe_images/recipe-image-legacy-id--1201644_11.jpg',
    [
      new Ingredient('meat', 10),
      new Ingredient('cheese', 5)
    ])
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();  // return the selected elements from an array
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredientsFromRecipe(ingredients);
  }
}
