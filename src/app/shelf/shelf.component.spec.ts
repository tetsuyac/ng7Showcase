import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ShelfComponent} from './shelf.component';
import {BookComponent} from '../book/book.component';
import {BookDetailsComponent} from '../book-details/book-details.component';

describe('ShelfComponent', () => {
  let component: ShelfComponent;
  let fixture: ComponentFixture<ShelfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ShelfComponent,
        BookComponent,
      BookDetailsComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShelfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
