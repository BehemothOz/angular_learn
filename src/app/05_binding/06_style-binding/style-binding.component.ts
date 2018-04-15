import { Component } from '@angular/core';

@Component({
  selector: 'app-style-binding',
  templateUrl: './style-binding.component.html',
  styleUrls: ['./style-binding.component.css']
})

export class StyleBindingComponent {
  isColor: boolean = false;

  getColor(): string {
    return `green`;
  }

  toggleColor(): void {
    this.isColor = !this.isColor;
  }
}
