import { Component } from '@angular/core';

@Component({
  selector: 'app-view-child',
  templateUrl: './view-child.component.html',
  styleUrls: ['./view-child.component.css']
})

export class ViewChildComponent {
  private visible: boolean = false;

  toggleVisibility() {
    this.visible = !this.visible;
  }
}
