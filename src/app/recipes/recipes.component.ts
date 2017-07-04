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
  // selectedRecipe: Recipe;
  // this service, RecipeService is available to recipes component and its child components
  constructor() { }
  // constructor(private recipeService: RecipeService) { }
  ngOnInit() {
    // Observable.subscribe() is used to subscribe to messages that are sent to an observable
    // method 3: since recipeSelected = new EventEmitter<Recipe>();  <= not used inside recipe.service.ts
    //           the following is not needed
    // method 2: step 1. recipeSelected = new EventEmitter<Recipe>(); in service
    //           step 2. this.recipeService.recipeSelected.emit()
    //           step 3. this.recipeService.recipeSelected.subscribe( ... ) listener to get data from step 2
    // this.recipeService.recipeSelected.subscribe(
    //   (recipe: Recipe) => {
    //     this.selectedRecipe = recipe;
    //   }
    // );
  }
}
