import { Component, ElementRef, AfterViewInit, OnInit, Input, Output, EventEmitter, ViewChild, Directive } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import { Subscription } from 'rxjs/Subscription';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})

export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[];
  private subscription: Subscription;
  constructor(private shoppingList: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.shoppingList.getIngredients();
    this.subscription = this.shoppingList.ingredientsChanged.subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
      }
    );
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
