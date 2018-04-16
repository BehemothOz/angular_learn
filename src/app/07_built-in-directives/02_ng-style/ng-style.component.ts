import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  templateUrl: './ng-style.component.html',
  styleUrls: ['./ng-style.component.css']
})

export class NgStyleComponent {
  styles: any;
  isDisabled: boolean = false;

  getStyles(): void {
    let styles = {
      'padding': '15px',
      'background-color': 'black',
      'color': 'white',
      'box-shadow': '0 0 10px rgba(0,0,0,0.5)'
    }

    this.styles = styles;
    this.isDisabled = true;
  }
}
