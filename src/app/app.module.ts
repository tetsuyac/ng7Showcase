import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ShelfComponent} from './shelf/shelf.component';
import {BookComponent} from './book/book.component';
import {ShelfService} from './common/shelf.service';
import {BookDetailsComponent} from './book-details/book-details.component';
import {DeskComponent} from './desk/desk.component';
import {HeaderComponent} from './header/header.component';
import {FullReachDirective} from './common/full-reach.directive';
import {NudgeRimDirective} from './common/nudge-rim.directive';
import {BorderGreenDirective} from './common/border-green.directive';
import {KeysPipe} from './common/keys.pipe';
import { RimSpaceDirective } from './common/rim-space.directive';

@NgModule({
  declarations: [
    AppComponent,
    ShelfComponent,
    BookComponent,
    BookDetailsComponent,
    DeskComponent,
    HeaderComponent,
    FullReachDirective,
    NudgeRimDirective,
    BorderGreenDirective,
    KeysPipe,
    RimSpaceDirective,
  ],
  imports: [
    BrowserModule
  ],
  providers: [ShelfService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
