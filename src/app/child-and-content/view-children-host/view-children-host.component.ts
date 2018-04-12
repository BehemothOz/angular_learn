import { Component, ViewChildren, QueryList } from '@angular/core';
import { ViewChildrenComponent } from './view-children/view-children.component';

@Component({
  selector: 'app-view-children-host',
  templateUrl: './view-children-host.component.html',
  styleUrls: ['./view-children-host.component.css']
})

export class ViewChildrenHostComponent {
  @ViewChildren(ViewChildrenComponent) // для получение доступа ко всем дочерним компонентам
  children: QueryList<ViewChildrenComponent>;

  showAll() {
    this.children.forEach(child => child.show());
  }
}
