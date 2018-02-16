import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DropdownDirective } from './dropdown.directive';
import { TestLoadTimes } from './testLoadTimes.service';


@NgModule({
    declarations: [
        DropdownDirective
    ],
    exports: [
        CommonModule,
        DropdownDirective,
    ],
})
export class SharedModule {
    static forRoot(): ModuleWithProviders {
        return {
          ngModule: SharedModule,
          providers: [TestLoadTimes]
        };
      }
}
