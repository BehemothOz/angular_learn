import { Component } from '@angular/core';

@Component({
  selector: 'app-class-binding',
  templateUrl: './class-binding.component.html',
  styleUrls: ['./class-binding.component.css']
})

export class ClassBindingComponent {
  allClasses: string = 'accent-border error-text highlighted';
  currentClasses: string = '';

  isAccentBorder: boolean = false;
  isErrorText: boolean = false;
  isHighlighted: boolean = false;

  toggleAllClasses(): void {
    if ( this.currentClasses == '' ) {
      this.currentClasses = this.allClasses;
    } else {
      this.currentClasses = '';
    }
  }

  toggleAccentBorder(): void {
    this.isAccentBorder = !this.isAccentBorder;
  }

  toggleErrorText():void {
    this.isErrorText = !this.isErrorText;
  }

  toggleHighlighted(): void {
    this.isHighlighted = !this.isHighlighted;
  }
}
