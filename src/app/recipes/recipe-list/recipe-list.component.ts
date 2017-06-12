import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  // array of object => Recipe
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is a simple test',
      'http://www.taste.com.au/recipes/spicy-coconut-fish-curry-rice-noodles/ZGy6LsUM')
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
