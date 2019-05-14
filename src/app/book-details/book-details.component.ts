import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styles: [`
    .row .form-group {
      display: inline-block;
    }

    i {
      color: lightgreen;
      padding-left: 2px;
      vertical-align: middle;
    }
  `]
})
export class BookDetailsComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
