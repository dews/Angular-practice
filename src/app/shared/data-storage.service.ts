import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { AuthService } from '../auth/auth.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DataStorageService {
    constructor(private http: Http,
        private recipeService: RecipeService,
        private authService: AuthService,
    ) { }

    storeRecipes() {
        return this.authService.getToken()
            .then((token) => {
                return this.http.put('https://dews.firebaseio.com/recipes.json?auth=' + token, this.recipeService.getRecipes())
                    .toPromise();
            });
    }

    getRecipes() {
        this.authService.getToken().then((token) => {
            this.http.get('https://dews.firebaseio.com/recipes.json?auth=' + token)
                .map((response: Response) => {
                    const recipes: Recipe[] = response.json();
                    return recipes.map(recipe => {
                        return recipe.ingredients ? recipe : Object.assign(recipe, { ingredients: [] });
                    });
                })
                .subscribe((recipes: Recipe[]) => {
                    this.recipeService.setRecipes(recipes);
                });
        });
    }
}
