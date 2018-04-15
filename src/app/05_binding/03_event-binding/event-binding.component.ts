import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})

export class EventBindingComponent {
  click1() {
    console.log('click #1');
  }

  click2() {
    console.log('click #2');
  }

  clickEvent(event) {
    console.group('EventList');
    for (let key in event) {
      console.log(`${key}: ${event[key]}`);
    }
    console.groupEnd();
  }
}
