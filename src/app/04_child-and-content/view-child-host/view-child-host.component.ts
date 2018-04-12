import { Component, ViewChild } from '@angular/core';
import { ViewChildComponent } from './view-child/view-child.component';

@Component({
  selector: 'app-view-child-host',
  templateUrl: './view-child-host.component.html',
  styleUrls: ['./view-child-host.component.css']
})
export class ViewChildHostComponent {

  @ViewChild(ViewChildComponent) // Для получения доступа к дочернему компоненту
  child: ViewChildComponent;

  toggleChild() {
    this.child.toggleVisibility();
  }
}
