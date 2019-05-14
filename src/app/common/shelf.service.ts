import {EventEmitter, Injectable} from '@angular/core';

import {_g} from '../common/global';
import {BookModel} from './book-model';
import {BooksTotalsModel} from './books-totals-model';


@Injectable({
  providedIn: 'root'
})
export class ShelfService {
  private books: BookModel[];
  private booksIx: number;
  booksChanged = new EventEmitter<BookModel[]>();
  booksIxChanged = new EventEmitter<number>();
  booksTotalsKey: string;

  constructor() {
    this.books = [
      new BookModel('T1', 'D1', 100, 1, 1),
      new BookModel('T2', 'D2', 200, 2, 2),
      new BookModel('T2', 'D2', 200, 2, 2),
      new BookModel('T3', 'D3', 300, 3, 1),
    ];
    this.booksIx = 0 <= this.books.length ? 0 : -1;
    this.booksTotalsKey = _g.title;
  }

  tapBooksAndIx() {
    this.tapBooks();
    this.tapBooksIx();
  }

  tapBooks() {
    this.booksChanged.next(this.books.slice());
  }

  tapBooksIx() {
    this.booksIxChanged.next(this.booksIx);
  }

  setBooksIx(booksIx) {
    this.booksIx = booksIx;
    this.tapBooksIx();
  }

  setBooksAllTotals() {
    const tot: BooksTotalsModel = new BooksTotalsModel(this.books);
    Object.keys(tot).reduce((m0, colHead) => {
      return this.books.reduce((m, book) => {
        m[colHead].push(this.calBooksTotalsByHead(colHead, book[colHead]));
        return m;
      }, m0);
    }, tot);
    this.books.forEach((book, i) => {
      book[_g.total] = tot[this.booksTotalsKey][i];
    });
  }

  calBooksTotalsByHead(colHead, colVal) {
    return this.books.reduce((m, book) => {
      if (book[colHead] === colVal) {
        m[colHead] = m[colHead]
          ? m[colHead] + 1
          : 1;
      }
      return m;
    }, {})[colHead] || 0;
  }

  tapTotalByHead(colHead, ttlVal) {
    this.books.forEach(book => {
      if (book[colHead] === colHead) {
        book[_g.total] = ttlVal;
      }
    });
    this.tapBooks();
  }

  addBook(book: BookModel[]) {
    this.books.push(...book);
    this.setBooksAllTotals();
    this.booksIx = this.updateBoooksIx(this.booksIx);
    this.tapBooksAndIx();
  }

  deleteBook() {
    if (0 <= this.booksIx) {
      this.books.splice(this.booksIx, 1);
      this.setBooksAllTotals();
      this.booksIx = this.updateBoooksIx(this.booksIx);
      this.tapBooksAndIx();
    }
  }

  updateBoooksIx(ix) {
    return this.booksIx !== this.books.length
      ? this.books.length !== 0
        ? this.booksIx
        : -1
      : this.booksIx - 1;
  }
}
