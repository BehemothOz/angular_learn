import { Component } from '@angular/core';

@Component({
  selector: 'app-timer-host',
  templateUrl: './timer-host.component.html',
  styleUrls: ['./timer-host.component.css']
})

export class TimerHostComponent {
  handlerTick1(value) {
    console.log(value);
  }

  handlerTick2(value) {
    console.log(value);
  }
}
