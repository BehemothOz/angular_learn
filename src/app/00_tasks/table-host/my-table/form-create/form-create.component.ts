import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form-create',
  templateUrl: './form-create.component.html',
  styleUrls: ['./form-create.component.css'],
  outputs: ['getProduct']
})

export class FormCreateComponent {
  id: string;
  name: string;
  category: string;
  price: string;

  getProduct: EventEmitter<any> = new EventEmitter();

  addProduct(): void {
    let product = {
      id: Number(this.id),
      name: this.name,
      category: this.category,
      price: Number(this.price)
    }

    this.getProduct.emit(product);
    this.resetForm();
  }

  resetForm(): void {
    this.id = undefined;
    this.name = '';
    this.category = undefined;
    this.price = '';
  }
}
