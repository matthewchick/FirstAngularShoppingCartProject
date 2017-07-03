// recipes.component.ts
import { Component, OnInit } from '@angular/core';
import { Recipe } from '../shared/models/recipe.model';
import { RecipeService } from '../shared/services/recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService] // child components: recipe-item and recipe-list can share the same service
})
export class RecipesComponent implements OnInit {
  selectedRecipe: Recipe;
  // this service, RecipeService is available to recipes component and its child components
  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    // method 2: listener to get data from this.recipeService.recipeSelected.emit()
    this.recipeService.recipeSelected.subscribe(
      (recipe: Recipe) => {
        this.selectedRecipe = recipe;
      }
    );
  }
}
