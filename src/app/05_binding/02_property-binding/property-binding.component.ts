import { Component } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.css']
})
export class PropertyBindingComponent {
  imageSrc: string = "/assets/images/databinding.png";
  imageTitle: string = "Data Binding in Angular 2";
  flag: boolean = false;

  toggleCheckbox() {
    this.flag = !this.flag;
  }
}
