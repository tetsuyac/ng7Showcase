import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DeskComponent} from './desk.component';
import {BookComponent} from "../book/book.component";

describe('DeskComponent', () => {
  let component: DeskComponent;
  let fixture: ComponentFixture<DeskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DeskComponent,
      BookComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
