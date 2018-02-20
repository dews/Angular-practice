import { Directive, HostBinding, HostListener, ElementRef } from '@angular/core';

@Directive({
    selector: '[appDropdown]'
})
export class DropdownDirective {
    @HostBinding('class.open') isOpen = false;

    @HostListener('click') toggleOpen($event) {
        this.isOpen = !this.isOpen;
    }
    @HostListener('document:click', ['$event']) clickout(event) {
        if (!this.elRef.nativeElement.contains(event.target)) {
            this.isOpen = false;
        } else {
            this.isOpen = true;
        }
    }
    constructor(private elRef: ElementRef) { }

}
