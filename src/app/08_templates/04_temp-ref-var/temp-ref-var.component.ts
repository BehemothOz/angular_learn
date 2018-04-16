import { Component } from '@angular/core';

@Component({
  selector: 'app-temp-ref-var',
  templateUrl: './temp-ref-var.component.html',
  styleUrls: ['./temp-ref-var.component.css']
})
export class TempRefVarComponent {
  resultValue: number = 0;

  calculate(x, y) {
    this.resultValue = Number(x) + Number(y);
  }
}
