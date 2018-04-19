import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service'; // импортируем сервис

@Component({
  selector: 'app-simple-service',
  templateUrl: './simple-service.component.html',
  styleUrls: ['./simple-service.component.css']
})
export class SimpleServiceComponent implements OnInit {
  public itemSource: string[];

  // private dataService: DataService внедрение зависимости через конструктор
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.itemSource = this.dataService.getData();
  }

}

