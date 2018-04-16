import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgClassComponent } from './01_ng-class/ng-class.component';
import { NgStyleComponent } from './02_ng-style/ng-style.component';
import { NgIfComponent } from './03_ng-if/ng-if.component';
import { NgSwitchComponent } from './04_ng-switch/ng-switch.component';
import { NgForComponent } from './05_ng-for/ng-for.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [NgClassComponent, NgStyleComponent, NgIfComponent, NgSwitchComponent, NgForComponent]
})
export class BuiltInDirectivesModule { }
