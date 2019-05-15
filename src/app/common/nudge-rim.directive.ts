import {Directive, HostBinding} from '@angular/core';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[appNudgeRight]'
})
export class NudgeRimDirective {
  @HostBinding('class.nudge-rim') true;

  constructor() {
  }
}
