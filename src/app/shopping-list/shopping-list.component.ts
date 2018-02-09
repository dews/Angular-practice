import { Component, ElementRef, AfterViewInit, OnInit, OnDestroy, Input, Output, EventEmitter, ViewChild, Directive } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

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
  onEditItem(index: number) {
    this.shoppingList.startedEditing.next(index);
  }
}
