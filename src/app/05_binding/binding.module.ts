import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InterpolationComponent } from './01_interpolation/interpolation.component';
import { PropertyBindingComponent } from './02_property-binding/property-binding.component';
import { EventBindingComponent } from './03_event-binding/event-binding.component';
import { AttributeBindingComponent } from './04_attribute-binding/attribute-binding.component';
import { ClassBindingComponent } from './05_class-binding/class-binding.component';
import { StyleBindingComponent } from './06_style-binding/style-binding.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [InterpolationComponent, PropertyBindingComponent, EventBindingComponent, AttributeBindingComponent, ClassBindingComponent, StyleBindingComponent]
})
export class BindingModule { }
