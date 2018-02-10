import { Recipe } from './recipe.model';
import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class RecipeService {
    recipesChanged = new Subject<Recipe[]>();

    private recipes: Recipe[] = [
        new Recipe('A apple recipe',
            'This is a test recipe',
            'http://www.seriouseats.com/images/2016/05/20160503-fava-carrot-ricotta-salad-recipe-1.jpg',
            [new Ingredient('grape', 7),
            new Ingredient('apple', 1)]),
        new Recipe('A rice recipe',
            'This is a test recipe',
            'http://www.seriouseats.com/images/2016/05/20160503-fava-carrot-ricotta-salad-recipe-1.jpg',
            [new Ingredient('apple', 2),
            new Ingredient('berry', 3)])
    ];

    constructor(private slService: ShoppingListService) {

    }

    setRecipes(recipes: Recipe[]) {
        this.recipes = recipes;
        this.recipesChanged.next(this.recipes.slice());
    }

    getRecipes() {
        return this.recipes.slice();
    }

    getRecipe(id: number) {
        return this.recipes.slice()[id];
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
    }

    addRecipe(recipe: Recipe) {
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
    }

    updateRecipe(index: number, newRecipe: Recipe) {
        this.recipes[index] = newRecipe;
        this.recipesChanged.next(this.recipes.slice());
    }

    deleteRecipe(index: number) {
        this.recipes.splice(index, 1);
        this.recipesChanged.next(this.recipes.slice());
    }
}
