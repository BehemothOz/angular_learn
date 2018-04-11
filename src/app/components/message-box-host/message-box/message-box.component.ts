import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-message-box',
  templateUrl: './message-box.component.html',
  styleUrls: ['./message-box.component.css'],
  inputs: ['name']
})

export class MessageBoxComponent {
  name: string;
  visible: boolean = true;

  hide(): void {
    this.visible = false;
  }
}
