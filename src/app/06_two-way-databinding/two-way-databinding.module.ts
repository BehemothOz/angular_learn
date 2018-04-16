import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms"; // для ngModel

import { NgModelComponent } from './ng-model/ng-model.component';
import { NgModelInsideComponent } from './ng-model-inside/ng-model-inside.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [NgModelComponent, NgModelInsideComponent]
})
export class TwoWayDatabindingModule { }