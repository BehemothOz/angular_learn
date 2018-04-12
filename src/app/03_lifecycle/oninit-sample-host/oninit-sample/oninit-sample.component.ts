import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-oninit-sample',
  templateUrl: './oninit-sample.component.html',
  styleUrls: ['./oninit-sample.component.css'],
  inputs: ['name']
})
export class OninitSampleComponent implements OnInit {
  name: string;

  ngOnInit() {
    console.group();
    console.log('ngOnInit __start');
    console.log(`initialization: ${this.name}`);
    console.log('ngOnInit __end');
    console.groupEnd();
  }

}
