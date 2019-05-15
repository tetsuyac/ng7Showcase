import {Directive, HostBinding} from '@angular/core';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[appRimSpace]'
})
export class RimSpaceDirective {
  @HostBinding('class.rim-space') true;

  constructor() {
  }
}
