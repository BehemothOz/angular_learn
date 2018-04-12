import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { AttributeBindingComponent } from './attribute-binding/attribute-binding.component';
import { ClassBindingComponent } from './class-binding/class-binding.component';
import { StyleBindingComponent } from './style-binding/style-binding.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [InterpolationComponent, PropertyBindingComponent, EventBindingComponent, AttributeBindingComponent, ClassBindingComponent, StyleBindingComponent]
})
export class BindingModule { }
