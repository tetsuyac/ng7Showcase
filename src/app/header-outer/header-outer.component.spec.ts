import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {HeaderOuterComponent} from './header-outer.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

describe('HeaderOuterComponent', () => {
  let component: HeaderOuterComponent;
  let fixture: ComponentFixture<HeaderOuterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderOuterComponent],
      imports: [BrowserAnimationsModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderOuterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
