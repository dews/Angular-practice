import { Component, OnInit, Input } from '@angular/core';
import { TestLoadTimes } from '../shared/testLoadTimes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
})
export class RecipesComponent implements OnInit {
  constructor(private testLoadTimes: TestLoadTimes) { }

  ngOnInit() {
    console.log(this.testLoadTimes.storeRecipes());
  }
}
