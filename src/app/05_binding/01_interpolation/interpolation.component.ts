import { Component } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.css']
})

export class InterpolationComponent {
  public firstName: string;
  public lastName: string;

  constructor() {
    this.firstName = 'Ivan';
    this.lastName = 'Ivanov';
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}
