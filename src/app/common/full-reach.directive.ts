import {Directive, HostBinding} from '@angular/core';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[appFullReach]'
})
export class FullReachDirective {
  @HostBinding('class.full-reach') true;

  constructor() {
  }
}
