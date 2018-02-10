import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
@Injectable()
export class DataStorageService {
    constructor(private http: Http, private recipeService: RecipeService) {

    }

    storeRecipes() {
        return this.http.put('https://dews.firebaseio.com/recipes.json', this.recipeService.getRecipes());
    }

    getRecipes() {
        this.http.get('https://dews.firebaseio.com/recipes.json')
            .map((response: Response) => {
                const recipes: Recipe[] = response.json();
                return recipes.map(recipe => {
                    return recipe.ingredients ? recipe : Object.assign(recipe, { ingredients: [] });
                });
            })
            .subscribe((recipes: Recipe[]) => {
                this.recipeService.setRecipes(recipes);
            });
    }
}
