import {BooksTotalsModel} from './books-totals-model';
import {BookModel} from './book-model';
import {ComponentFixture, TestBed} from '@angular/core/testing';

describe('BooksTotalsModel', () => {
  let book: BookModel;
  let fixture: ComponentFixture<BookModel>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BookModel);
    book = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create an instance', () => {
    expect([book]).toBeTruthy();
  });
});
