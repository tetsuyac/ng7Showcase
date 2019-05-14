import {Directive, HostBinding} from '@angular/core';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[appBorderGreen]'
})
export class BorderGreenDirective {
  @HostBinding('class.border-green') true;

  constructor() {
  }
}
