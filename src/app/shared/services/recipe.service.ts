// recipe.service.ts

import {Recipe} from '../models/recipe.model';
import {EventEmitter} from '@angular/core';

export class RecipeService {
  // method 2: event -binding
  recipeSelected = new EventEmitter<Recipe>();

  // data encapsulation
  private recipes: Recipe[] = [
    new Recipe('Roasted-broccoli',
      'Stalks with a nutty tahini yogurt and Puy lentils',
      'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe/recipe-image/2017/05/roasted-broccoli.jpg'),
    new Recipe('Courgette & halloumi skewers',
      'Marinade cheese with mint, lemon and olive oil',
      'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe_images/recipe-image-legacy-id--1201644_11.jpg')
  ];

  getRecipes() {
    return this.recipes.slice();  // return the selected elements from an array
  }
}
