import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { Route } from '@angular/router/src/config';
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { AuthGuard } from './auth/auth-guard.service';

const appRoutes: Routes = [
    { path: '', redirectTo: 'recipes', pathMatch: 'full' },
    { path: 'recipes', loadChildren: './recipes/recipes.module#RecipesModule' },
    { path: 'shopping-list', component: ShoppingListComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules })],
    exports: [RouterModule],
})
export class AppRoutingModule {

}
