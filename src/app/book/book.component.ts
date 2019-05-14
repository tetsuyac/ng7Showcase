import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ShelfService} from '../common/shelf.service';
import {BookModel} from '../common/book-model';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styles: [`
    div.selected {
      background-color: lightgreen;
    }
  `]
})
export class BookComponent implements OnInit {
  @Input() book: BookModel;
  @Input() booksIx: number;
  @Input() index: number;
  @Output() clicked = new EventEmitter<Event>();

  constructor(private shelf: ShelfService) {
  }

  ngOnInit() {
  }

  onClick(event) {
    this.shelf.setBooksIx(this.index);
    this.clicked.next(event);
  }
}
