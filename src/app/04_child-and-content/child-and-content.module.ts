import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewChildHostComponent } from './view-child-host/view-child-host.component';
import { ViewChildComponent } from './view-child-host/view-child/view-child.component';
import { ViewChildrenHostComponent } from './view-children-host/view-children-host.component';
import { ViewChildrenComponent } from './view-children-host/view-children/view-children.component';
import { ViewContentHostComponent } from './view-content-host/view-content-host.component';
import { ViewContentComponent } from './view-content-host/view-content/view-content.component';
import { ViewListContentComponent } from './view-content-host/view-list-content/view-list-content.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ViewChildHostComponent, ViewChildComponent, ViewChildrenHostComponent, ViewChildrenComponent, ViewContentHostComponent, ViewContentComponent, ViewListContentComponent]
})
export class ChildAndContentModule { }
