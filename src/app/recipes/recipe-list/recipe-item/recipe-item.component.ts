// recipe-item.component.ts
// method 1: import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../../../shared/models/recipe.model';
import { RecipeService } from '../../../shared/services/recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;
  /* method 1 : use event binding
  @Output() recipeSelected = new EventEmitter<void>(); */
  constructor(private receipeService: RecipeService) { }

  ngOnInit() {
  }

  onSelected() {
    // method 1: this.recipeSelected.emit();   // no return value
    // method 2: use EventEmitter on service => recipes.component.ts
    this.receipeService.recipeSelected.emit(this.recipe); // get selected recipe from service
  }
}
