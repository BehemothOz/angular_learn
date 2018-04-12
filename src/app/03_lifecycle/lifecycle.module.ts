import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OninitSampleHostComponent } from './oninit-sample-host/oninit-sample-host.component';
import { OninitSampleComponent } from './oninit-sample-host/oninit-sample/oninit-sample.component';
import { OnchangesSampleHostComponent } from './onchanges-sample-host/onchanges-sample-host.component';
import { OnchangesSampleComponent } from './onchanges-sample-host/onchanges-sample/onchanges-sample.component';
import { AlleventSampleHostComponent } from './allevent-sample-host/allevent-sample-host.component';
import { AlleventSampleComponent } from './allevent-sample-host/allevent-sample/allevent-sample.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [OninitSampleHostComponent, OninitSampleComponent, OnchangesSampleHostComponent, OnchangesSampleComponent, AlleventSampleHostComponent, AlleventSampleComponent]
})

export class LifecycleModule { }
