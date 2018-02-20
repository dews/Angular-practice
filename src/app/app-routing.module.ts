import { NgModule } from '@angular/core';
import { Route, Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { HomeComponent } from './core/home/home.component';
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { AuthGuard } from './auth/auth-guard.service';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'recipes', loadChildren: './recipes/recipes.module#RecipesModule', canActivate: [AuthGuard] },
    { path: 'shopping-list', component: ShoppingListComponent, canActivate: [AuthGuard] },
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules })],
    exports: [RouterModule],
})
export class AppRoutingModule {

}
