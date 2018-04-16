import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgIfTemplatesComponent } from './01_ng-if-templates/ng-if-templates.component';
import { NgSwitchTemplatesComponent } from './02_ng-switch-templates/ng-switch-templates.component';
import { NgForTemplatesComponent } from './03_ng-for-templates/ng-for-templates.component';
import { TempRefVarComponent } from './04_temp-ref-var/temp-ref-var.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [NgIfTemplatesComponent, NgSwitchTemplatesComponent, NgForTemplatesComponent, TempRefVarComponent]
})
export class TemplatesModule { }
