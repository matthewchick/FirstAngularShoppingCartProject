// recipe-list.component.ts
import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { Recipe } from '../../shared/models/recipe.model';
import {RecipeService} from '../../shared/services/recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  // recipe data will be exposed to recipes.component  => event binding
  /* method 2: use service
  @Output() recipeWasSelected = new EventEmitter<Recipe>(); */

  // array of object => Recipe
  // static images can be stored in assets folder
  /* moving the following codes to recipe.service.ts
  recipes: Recipe[] = [
    new Recipe('Roasted-broccoli',
      'Stalks with a nutty tahini yogurt and Puy lentils',
      'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe/recipe-image/2017/05/roasted-broccoli.jpg'),
    new Recipe('Courgette & halloumi skewers',
      'Marinade cheese with mint, lemon and olive oil',
      'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe_images/recipe-image-legacy-id--1201644_11.jpg')
  ]; */

  recipes: Recipe[];

  constructor(private recipeService: RecipeService) {
  }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes(); // get back recipe data stored in RecipeService
  }

  /* method 2: use service
  onRecipeSelected(selectedrecipeItem: Recipe) {
    this.recipeWasSelected.emit(selectedrecipeItem);
    console.log("recipeWasSelected's content is " + selectedrecipeItem.name);
  } */
}

