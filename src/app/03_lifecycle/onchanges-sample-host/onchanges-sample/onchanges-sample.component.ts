import { Component, Input, OnChanges, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-onchanges-sample',
  templateUrl: './onchanges-sample.component.html',
  styleUrls: ['./onchanges-sample.component.css'],
  inputs: ['name', 'value', 'currentValue']
})

export class OnchangesSampleComponent implements OnChanges {
  name: string;
  value: number = 0;

  // { [propertyName: string]: SimpleChange } - массив с строковыми ключами и значением типа SimpleChange
  ngOnChanges(changes: { [propertyName: string]: SimpleChange }) {
    console.log(`ngOnChanges called`);
    
    for (let propName in changes) {
      console.group(`group`);

      console.log(`property = ${propName}`);
      console.log(`current value = ${changes[propName].currentValue}`);
      console.log(`previous value = ${changes[propName].previousValue}`);

      console.groupEnd();
    }
  }
}
