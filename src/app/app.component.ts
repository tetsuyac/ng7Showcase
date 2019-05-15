import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`
    .jumbotron {
      padding: 1rem 0 1rem;
      margin-top: 2rem;
      background-color: gold;
    }`]
})
export class AppComponent {
  title = 'ng7 Showcase';
}
