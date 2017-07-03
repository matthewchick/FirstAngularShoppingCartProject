// recipe-detail.component.ts
import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from '../../shared/models/recipe.model';
import {RecipeService} from '../../shared/services/recipe.service';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  // delete @input => not get data from recipe-list to recipe-detail
  recipeDetail: Recipe;
  id: number;
  /* get data from recipe-list to recipe-detail by using property-binding
  @Input() recipeDetail: Recipe;
  */
  // use child routing, add ActivatedRoute
  constructor(private recipeService: RecipeService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    /* show how to pass parameter => localhost/recipes/1 */
    /* The ActivatedRoute service provides a params Observable which
       we can subscribe to to get the route parameters
    */
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.recipeDetail = this.recipeService.getRecipe(this.id);
    })
  }

  onAddToShoppingList() {
    this.recipeService.addIngredientsToShoppingList(this.recipeDetail.ingredients);
  }
}
