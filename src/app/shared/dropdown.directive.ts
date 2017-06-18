// build property directive
import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})

export class DropdownDirective {
  // make interactive
  // If a binding changes, it will update the host element of the directive <= @HostBinding
  // <li class="dropdown open">
  @HostBinding('class.open') isOpen = false;

  // @HostListener - will listen to the event emitted by host element
  @HostListener('click') toggleOpen() {
    this.isOpen = !this.isOpen;

  }
}
