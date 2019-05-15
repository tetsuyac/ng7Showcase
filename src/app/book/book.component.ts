import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ShelfService} from '../common/shelf.service';
import {BookModel} from '../common/book-model';
import index from '@angular/cli/lib/cli';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styles: [`
    .book-elm {
      cursor: pointer;
    }

    div.hovered {
      background-color: lightYellow;
    }

    div.selected {
      background-color: moccasin;
    }
  `]
})
export class BookComponent implements OnInit {
  @Input() book: BookModel;
  @Input() booksIx: number;
  @Input() index: number;
  hovered: boolean;
  selected = -1;
  @Output() clicked = new EventEmitter<Event>();

  constructor(private shelf: ShelfService) {
  }

  ngOnInit() {
  }

  mouseEnter(event) {
    this.hovered = true;
    // console.log(event.target);
  }

  mouseLeave(event) {
    this.hovered = false;
    // console.log(event.target);
  }

  onClick(event) {
    this.selected = this.index;
    this.shelf.setBooksIx(this.index);
    this.clicked.next(event);
  }
}
