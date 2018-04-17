import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";

import { TableHostComponent } from './table-host/table-host.component';
import { FormCreateComponent } from './table-host/my-table/form-create/form-create.component';
import { MyTableComponent } from './table-host/my-table/my-table.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [TableHostComponent, MyTableComponent, FormCreateComponent]
})
export class TasksModule { }
