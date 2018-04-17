import { Component, Input, OnInit } from '@angular/core';
import { Product } from './product';

const PRODUCTS: Array<Product> = [
  { id: 1, name : 'product 1', category: 'Category 1', price : 100 },
  { id: 2, name : 'product 2', category: 'Category 2', price : 200 },
  { id: 3, name : 'product 3', category: 'Category 2', price : 300 },
  { id: 4, name : 'product 4', category: 'Category 1', price : 400 },
  { id: 5, name : 'product 5', category: 'Category 3', price : 500 },
  { id: 6, name : 'product 6', category: 'Category 1', price : 600 },
  { id: 7, name : 'product 7', category: 'Category 2', price : 700 },
  { id: 8, name : 'product 8', category: 'Category 1', price : 800 },
  { id: 9, name : 'product 9', category: 'Category 3', price : 900 },
  { id: 10, name : 'product 10', category: 'Category 3', price : 1000 }
];

@Component({
  selector: 'app-my-table',
  templateUrl: './my-table.component.html',
  styleUrls: ['./my-table.component.css'],
  inputs: ['rows']
})

export class MyTableComponent implements OnInit {
  
  products: Array<Product> = PRODUCTS;
  filteredProducts: Array<Product>;
  
  rows: number;
  selectValue: string = 'All';
  
  ngOnInit() {
    this.filteredProducts = this.products;
    this.products.length = this.rows;
  }

  delete(product: Product): void {
    this.filteredProducts = this.filteredProducts.filter(elem => elem.id !== product.id);
    this.rows = this.filteredProducts.length;
    console.log(`id removed item: ${product.id}`);
  }

  filterCategory(value): void {
    
    if (value == 'All') {
      this.filteredProducts = this.products;
      this.rows = this.products.length;
      return;
    }

    this.filteredProducts = this.products.filter(elem => value == elem.category);
    this.rows = this.filteredProducts.length;
  }

  handlerGetProduct(event): void {
    this.selectValue = 'All';
    this.filterCategory(this.selectValue);

    this.products.push(event);
    this.rows = this.products.length;
  }
}
