import {BooksTotalsModel} from './books-totals-model';
import {BookModel} from './book-model';
import {ComponentFixture, TestBed} from '@angular/core/testing';

describe('BooksTotalsModel', () => {
  let booksTotal: BooksTotalsModel;

  beforeEach(() => {
    booksTotal = new BooksTotalsModel();
  });

  it('should create an instance', () => {
    expect(booksTotal instanceof BooksTotalsModel).toBe(true, 'instance of BooksTotalModel');
  });
});
