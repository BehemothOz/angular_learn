import { Component, OnInit } from '@angular/core';
import { Phone1, Phone2 } from '../phone';
import { DataService } from '../data.service';

@Component({
  selector: 'app-testing-host',
  templateUrl: './testing-host.component.html',
  styleUrls: ['./testing-host.component.css'],
  providers: [DataService]
})
export class TestingHostComponent implements OnInit {

  items: Phone1[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.items = this.dataService.getData();

    console.log(Phone1);
    console.log(Phone2);
  }

  addItem(name: string, price: number) {
    this.dataService.addData(name, price);
  }

}
