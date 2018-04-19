import { Component, OnInit } from '@angular/core';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-counter1',
  templateUrl: './counter1.component.html',
  styleUrls: ['./counter1.component.css'],
  providers: [CounterService] // данный компонент использует свой экземпляр сервиса
})
export class Counter1Component implements OnInit {
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
