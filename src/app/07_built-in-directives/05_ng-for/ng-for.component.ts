import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent {
  items: string[] = [];

  constructor() {
    for(let i = 0; i <= 5; i++ ) {
      this.items[i] = `item ${i}`;
    }
  }
}
