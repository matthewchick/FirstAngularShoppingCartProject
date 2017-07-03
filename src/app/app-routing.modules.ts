// app-routing.modules.ts
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import {RecipeStartComponent} from './recipes/recipe-start/recipe-start.component';
import {RecipeDetailComponent} from './recipes/recipe-detail/recipe-detail.component';
import {RecipeEditComponent} from './recipes/recipe-edit/recipe-edit.component';

/* pathMatch: 'full' means, that the whole URL path needs to match and is consumed by the route matching algorithm.
   pathMatch: 'prefix' means, the first route where the path matches the start of the URL is choosen,
               but then the route matching algorithm is continuing searching for matching child routes
               where the rest of the URL matches.
   add child routing using children
*/
const appRoutes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full'},
  { path: 'recipes', component: RecipesComponent, children: [
    { path: '', component: RecipeStartComponent },      // localhost:4200/recipes
    { path: 'new', component: RecipeEditComponent },
    { path: ':id', component: RecipeDetailComponent },   // localhost:4200/recipes/id
    { path: ':id/edit', component: RecipeEditComponent }
  ] },
  { path: 'shopping-list', component: ShoppingListComponent }
];

// create a new app-routing.modules, not necessary to use declaration inside @NgModule
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
