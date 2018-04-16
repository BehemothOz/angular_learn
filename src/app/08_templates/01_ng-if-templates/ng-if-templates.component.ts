import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-if-templates',
  templateUrl: './ng-if-templates.component.html',
  styleUrls: ['./ng-if-templates.component.css']
})
export class NgIfTemplatesComponent {
  isVisible: boolean = true;

  hide(): void {
    this.isVisible = false;
  }
}
