import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
  inputs: ['name', 'counterValue']
})

export class CounterComponent {
  name: string = 'Default name';
  counterValue: number = 0;

  @Input()
  counterStep: number = 1;

  increment(): void {
    this.counterValue = this.counterValue + this.counterStep;
  }
}
