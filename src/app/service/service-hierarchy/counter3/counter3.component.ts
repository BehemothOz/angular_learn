import { Component, OnInit } from '@angular/core';
import { CounterService } from '../counter.service';

// Данный компонент использует экземпляр сервсиа CounterService, который создан для родительского компонента.

@Component({
  selector: 'app-counter3',
  templateUrl: './counter3.component.html',
  styleUrls: ['./counter3.component.css']
})
export class Counter3Component implements OnInit {
  public counter: number = 0;

  constructor( private counterSercvie: CounterService ) { }

  ngOnInit() {
  }

  plusOne() {
    this.counterSercvie.increment();
    this.counter = this.counterSercvie.getValue();
  }
  
  minusOne() {
    this.counterSercvie.decrement();
    this.counter = this.counterSercvie.getValue();
  }
}
