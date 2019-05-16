import {Component, OnInit, ViewChildren, QueryList, AfterViewInit, ChangeDetectorRef} from '@angular/core';
import {Subscription} from 'rxjs';

import {BookModel} from '../common/book-model';
import {BookComponent} from '../book/book.component';
import {ShelfService} from '../common/shelf.service';
import {KeysPipe} from '../common/keys.pipe';

@Component({
  selector: 'app-shelf',
  templateUrl: './shelf.component.html',
  styles: [`
    app-book-details {
      cursor: pointer;
    }
    .hoverable {
      cursor: pointer;
    }
  `]
})

export class ShelfComponent implements OnInit {
  books: BookModel[];
  booksSub: Subscription;
  booksIx: number;
  booksIxSub: Subscription;
  booksTotalsKey: string;
  // booksTotalsKeyChanged: boolean;
  booksTotalsKeySub: Subscription;
  heads: string[];
  headsReady: boolean;

  @ViewChildren(BookComponent) booksView: QueryList<BookComponent>;

  constructor(private shelf: ShelfService, private cdRef: ChangeDetectorRef) {
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngAfterViewInit() {
    this.booksView.forEach(bookView => {
      // console.log(bookView.book);

      // bookView.book.title = 'Hey!';
      // this.cdRef.detectChanges(); // 190502 https://jaxenter.com/simplifying-viewchild-contentchild-angular-142894.html
    });
  }

  // tslint:disable-next-line:use-life-cycle-interface
  // ngAfterContentInit() {
  // }
  //
  ngOnInit() {
    this.books = undefined;
    this.booksSub = this.shelf.booksChanged
      .subscribe(
        (books: BookModel[]) => {
          this.books = books;
          if (!this.headsReady) {
            this.heads = Object.keys(books[0]).map(head => head);
            this.headsReady = true;
          }
        }
      );

    this.booksIx = -1;
    this.booksIxSub = this.shelf.booksIxChanged
      .subscribe(
        (booksIx: number) => {
          this.booksIx = booksIx;
        }
      );

    this.booksTotalsKey = '';
    // this.booksTotalsKeyChanged = false;
    this.booksTotalsKeySub = this.shelf.booksTotalsKeyChanged
      .subscribe(
        (booksTotalsKey: string) => {
          this.booksTotalsKey = booksTotalsKey;
          // this.booksTotalsKeyChanged = true;
        }
      );

    this.shelf.tapAll();
  }

  onClicked(head) {
    this.shelf.setBooksTotalsKey(head);
  }
}
