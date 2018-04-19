import { Injectable } from "@angular/core";

export class CounterService {
  public counter: number = 0;

  increment(): void {
    this.counter++;
  }

  decrement(): void {
    this.counter--;
  }

  getValue(): number {
    return this.counter;
  }
}