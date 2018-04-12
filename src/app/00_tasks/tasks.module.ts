import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableHostComponent } from './table-host/table-host.component';
import { MyTableComponent } from './table-host/my-table/my-table.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TableHostComponent, MyTableComponent]
})
export class TasksModule { }
