import { Component } from '@angular/core';

@Component({
  selector: 'app-onchanges-sample-host',
  templateUrl: './onchanges-sample-host.component.html',
  styleUrls: ['./onchanges-sample-host.component.css']
})

export class OnchangesSampleHostComponent {
  nameValue: string;
  currentValue: number = 0;
  changeableValue: number = 0;

  increment() {
    this.currentValue++;
  }

  decrement() {
    if (this.currentValue == 0) return;
    this.currentValue--;
  }

  changeValue() {
    this.changeableValue++;
  }

  changeName() {
    this.nameValue = `numerical name - ${new Date().getTime()}`;
  }

  changeBoth() {
    this.changeableValue++;
    this.nameValue = `value ${new Date().getTime()}`;
  }
}
