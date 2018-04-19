import { Component, OnInit } from '@angular/core';
import { CounterService } from './counter.service';

@Component({
  selector: 'app-service-hierarchy',
  templateUrl: './service-hierarchy.component.html',
  styleUrls: ['./service-hierarchy.component.css'],
  providers: [CounterService]
})
export class ServiceHierarchyComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
