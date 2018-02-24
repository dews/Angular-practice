import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';
import { AuthService } from '../auth/auth.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class DataStorageService {
    constructor(private httpClent: HttpClient,
        private recipeService: RecipeService,
        private authService: AuthService,
    ) { }

    storeRecipes() {
        return this.httpClent.put('https://dews.firebaseio.com/recipes.json',
            this.recipeService.getRecipes(),
            {
                observe: 'body',
            });
    }

    getRecipes() {
        this.httpClent.get<Recipe[]>('https://dews.firebaseio.com/recipes.json',
            {
                observe: 'body',
                responseType: 'json',
            })
            .map(recipes =>
                recipes.map(recipe =>
                    recipe.ingredients ? recipe : Object.assign(recipe, { ingredients: [] })
                ))
            .subscribe((recipes: Recipe[]) => {
                this.recipeService.setRecipes(recipes);
            });
    }
}
