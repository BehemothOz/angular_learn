import { Component } from '@angular/core';

@Component({
  selector: 'app-card-name',
  templateUrl: './card-name.component.html',
  styleUrls: ['./card-name.component.css'],
  inputs: ['firstName', 'lastName']
})

export class CardNameComponent {
  firstName: string;
  private _lastName: string;

  // getter для получения значения закрытого поля _lastName
  get lastName() {
    return this._lastName;
  }
  
  // setter для установки значения закрытому полю _lastName
  set lastName(value) {
    this._lastName = value;
  }
  
  get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}
