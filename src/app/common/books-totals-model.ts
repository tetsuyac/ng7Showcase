import {BookModel} from './book-model';

export class BooksTotalsModel {
  title: number[];
  desc: number[];
  price: number[];
  unit: number[];

  constructor(books: BookModel[] = []) { // books not used for now.
    this.title = [];
    this.desc = [];
    this.price = [];
    this.unit = [];
  }
}
