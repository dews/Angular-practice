import { Directive, HostBinding, HostListener, ElementRef, Renderer2 } from '@angular/core';

@Directive({
    selector: '[appDropdown]'
})
export class DropdownDirective {
    isOpen = false;

    @HostListener('click') toggleOpen() {
        this.isOpen = !this.isOpen;
        if (this.isOpen) {
            this.render.addClass(this.elRef.nativeElement, 'open');
        } else {
            this.render.removeClass(this.elRef.nativeElement, 'open');
        }
    }
    // When click outside of dropdown, close dropdown.
    @HostListener('document:click') clickout() {
        if (!this.elRef.nativeElement.contains(event.target)) {
            this.isOpen = false;
            this.render.removeClass(this.elRef.nativeElement, 'open');
        }
    }
    constructor(private elRef: ElementRef, private render: Renderer2) { }

}
