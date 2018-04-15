import { Component } from '@angular/core';

@Component({
  selector: 'app-attribute-binding',
  templateUrl: './attribute-binding.component.html',
  styleUrls: ['./attribute-binding.component.css']
})

export class AttributeBindingComponent {
  value: number = 20;
  width: number = 4;

  increaseRadius() {
    this.value++;
  }

  decreaseRadius() {
    this.value--;
  }

  increaseStroke() {
    this.width++;
  }

  decreaseStroke() {
    this.width--;
  }
}
