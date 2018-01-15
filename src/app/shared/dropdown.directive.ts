import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
    selector: '[appDropdown]'
})
export class DropdrownDirective {
    @HostBinding('class.open') isOpen = false;

    @HostListener('click') toggleOpen($event) {
        this.isOpen = !this.isOpen;
    }
    constructor() {

    }

}
