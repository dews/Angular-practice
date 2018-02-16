import { Injectable } from '@angular/core';

@Injectable()
export class TestLoadTimes {
    i = 0;
    constructor() {
        console.log('TestLoadTimes');
        ++this.i;
    }

    storeRecipes() {
        return this.i;
    }
}
