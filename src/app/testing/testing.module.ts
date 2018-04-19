import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { TestingHostComponent } from './testing-host/testing-host.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [TestingHostComponent]
})
export class TestingModule { }
