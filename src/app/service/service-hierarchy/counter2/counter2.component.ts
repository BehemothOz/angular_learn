import { Component, OnInit } from '@angular/core';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-counter2',
  templateUrl: './counter2.component.html',
  styleUrls: ['./counter2.component.css']
})
export class Counter2Component implements OnInit {
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
