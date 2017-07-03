// recipe-detail.component.ts
import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from '../../shared/models/recipe.model';
import {RecipeService} from '../../shared/services/recipe.service';
import {ActivatedRoute, Params, Router} from '@angular/router';

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
              private route: ActivatedRoute,
              private router: Router) { }

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

  // relativeTo is used to navigate to relative path
  onEditRecipe() {
    this.router.navigate(['edit'], {relativeTo: this.route});
    // this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.route});
  }

  onAddToShoppingList() {
    this.recipeService.addIngredientsToShoppingList(this.recipeDetail.ingredients);
  }
}
