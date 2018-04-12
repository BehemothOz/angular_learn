import { Component } from '@angular/core';

@Component({
  selector: 'app-view-children',
  templateUrl: './view-children.component.html',
  styleUrls: ['./view-children.component.css']
})

export class ViewChildrenComponent {
  private visible: boolean = false;

  show() {
    this.visible = true;
  }
}
