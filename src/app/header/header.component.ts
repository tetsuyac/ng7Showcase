import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {BookModel} from '../common/book-model';
import {ShelfService} from '../common/shelf.service';

import {_g} from '../common/global';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [`
    .form-group {
      display: inline-block;
    }
    button.add, button.del, button.dit {
      color: dimgray;
    }
    button.add {
      background-color: khaki;
    }
    button.del {
      background-color: papayawhip;
    }
    button.dit {
      background-color: beige;
    }
  `]
})
export class HeaderComponent implements OnInit {
  @ViewChild('titleInput') titleInputRef: ElementRef;
  @ViewChild('descInput') descInputRef: ElementRef;
  @ViewChild('priceInput') priceInputRef: ElementRef;
  @ViewChild('unitInput') unitInputRef: ElementRef;
  @ViewChild('totalInput') totalInputRef: ElementRef;
  editing = false;
  refs: object = {};

  constructor(private shelf: ShelfService) {
  }

  ngOnInit() {
    this.refs[_g.title] = this.titleInputRef;
    this.refs[_g.desc] = this.descInputRef;
    this.refs[_g.price] = this.priceInputRef;
    this.refs[_g.unit] = this.unitInputRef;
    this.refs[_g.total] = this.unitInputRef;
  }

  onChanged() {
    this.editing = this.isThereAny();
  }

  onAddItem() {
    if (this.isItReady()) {
      this.shelf.addBook([ // one at a time for now.
        new BookModel(
          this.refs[_g.title].nativeElement.value,
          this.refs[_g.desc].nativeElement.value,
          +this.refs[_g.price].nativeElement.value,
          +this.refs[_g.unit].nativeElement.value,
          -1,
        )
      ]);
    }
  }

  onDeleteItem() {
    this.shelf.deleteBook();
  }

  onClearEdit() {
    this.refs[_g.title].nativeElement.value = '';
    this.refs[_g.desc].nativeElement.value = '';
    this.refs[_g.price].nativeElement.value = undefined;
    this.refs[_g.unit].nativeElement.value = undefined;
    this.editing = false;
  }

  isThereAny() {
    return this.refs[_g.title].nativeElement.value !== '' ||
      this.refs[_g.desc].nativeElement.value !== '' ||
      this.refs[_g.price].nativeElement.value !== '' ||
      this.refs[_g.unit].nativeElement.value !== '';
  }

  isItReady() {
    return this.refs[_g.title].nativeElement.value !== '' &&
      this.refs[_g.desc].nativeElement.value !== '' &&
      this.refs[_g.price].nativeElement.value !== '' &&
      this.refs[_g.unit].nativeElement.value !== '';
  }
}
