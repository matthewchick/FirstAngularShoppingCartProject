// app-routing.modules.ts
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

/* pathMatch: 'full' means, that the whole URL path needs to match and is consumed by the route matching algorithm.
   pathMatch: 'prefix' means, the first route where the path matches the start of the URL is choosen,
               but then the route matching algorithm is continuing searching for matching child routes
               where the rest of the URL matches.
*/
const appRoutes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full'},
  { path: 'recipes', component: RecipesComponent },
  { path: 'shopping-list', component: ShoppingListComponent }
];

// create a new app-routing.modules, not necessary to use declaration inside @NgModule
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
