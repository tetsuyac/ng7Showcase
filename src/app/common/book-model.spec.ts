import {BookModel} from './book-model';
import {ComponentFixture, TestBed} from '@angular/core/testing';

describe('BookModel', () => {
  let book: BookModel;

  beforeEach(() => {
    book = new BookModel();
  });

  it('should create an instance', () => {
    expect(book instanceof BookModel).toBe(true, 'instance of BookModel');
  });
});
