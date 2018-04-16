import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-model',
  templateUrl: './ng-model.component.html',
  styleUrls: ['./ng-model.component.css']
})

export class NgModelComponent {
  firstValue: number;
  secondValue: number;
  resultValue: number = 0;

  calculate(): void {
    this.resultValue = Number(this.firstValue) + Number(this.secondValue);
  };

  reset(): void {
    this.firstValue = this.secondValue = undefined;
    this.resultValue = 0
  }
}
