import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css'],
  inputs: ['name', 'interval']
})

export class TimerComponent {
  intervalObject: any;
  currentValue: number = 0;
  interval: number = 1000;
  showingClear: boolean = false;

  @Output()
  tick: EventEmitter<number> = new EventEmitter();

  start() {
    if (this.intervalObject) return;
    if (this.showingClear) this.showingClear = false;
    this.intervalObject = setInterval(() => { this.callback() }, this.interval);
  }

  stop() {
    if (!this.intervalObject) return;
    clearInterval(this.intervalObject);
    this.intervalObject = false;
    this.showingClear = true;
  }

  clear() {
    this.currentValue = 0;
  }

  callback() {
    this.currentValue++;
    this.tick.emit(this.currentValue);
  }
}

let zxc = new TimerComponent();
console.log(zxc);
