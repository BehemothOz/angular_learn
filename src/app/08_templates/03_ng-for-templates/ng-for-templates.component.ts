import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for-templates',
  templateUrl: './ng-for-templates.component.html',
  styleUrls: ['./ng-for-templates.component.css']
})
export class NgForTemplatesComponent {
  items: Array<string> = [];

  constructor() {
    for( let i = 0; i <= 7; i++ ) {
      this.items[i] = `item ${i}`;
    }
  }
}
