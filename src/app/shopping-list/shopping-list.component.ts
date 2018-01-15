import { Component, ElementRef, AfterViewInit, OnInit, Input, Output, EventEmitter, ViewChild, Directive } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

// tslint:disable-next-line:directive-selector
@Directive({selector: 'appSoppingEdit'})
class ChildDirective {
}

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})

export class ShoppingListComponent implements OnInit, AfterViewInit {
  @Output() out = new EventEmitter<{ type: string }>();
  @ViewChild(ChildDirective) child: ElementRef;
  ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];
  constructor() { }

  ngOnInit() {
    this.out.emit({ type: 'emit' });
  }
  onIngredientAdded(ingredient: Ingredient){
    this.ingredients.push(ingredient);
  }
  ngAfterViewInit() {
    console.log(this.child);
  }
}
