// recipe-list.component.ts
import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  // recipe data will be exposed to recipes.component  => event binding
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  // array of object => Recipe
  // static images can be stored in assets folder
  recipes: Recipe[] = [
    new Recipe('Roasted-broccoli',
      'Stalks with a nutty tahini yogurt and Puy lentils',
      'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe/recipe-image/2017/05/roasted-broccoli.jpg'),
    new Recipe('Courgette & halloumi skewers',
      'Marinade cheese with mint, lemon and olive oil',
      'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe_images/recipe-image-legacy-id--1201644_11.jpg')
  ];

  constructor() {
  }

  ngOnInit() {
  }

  onRecipeSelected(selectedrecipeItem: Recipe) {
    this.recipeWasSelected.emit(selectedrecipeItem);
    console.log("recipeWasSelected's content is " + selectedrecipeItem.name);
  }
}

