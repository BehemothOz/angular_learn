import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterHostComponent } from './counter-host/counter-host.component';
import { CounterComponent } from './counter-host/counter/counter.component';
import { TimerHostComponent } from './timer-host/timer-host.component';
import { TimerComponent } from './timer-host/timer/timer.component';
import { CardNameHostComponent } from './card-name-host/card-name-host.component';
import { CardNameComponent } from './card-name-host/card-name/card-name.component';
import { MessageBoxHostComponent } from './message-box-host/message-box-host.component';
import { MessageBoxComponent } from './message-box-host/message-box/message-box.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CounterHostComponent,
    CounterComponent,
    TimerHostComponent,
    TimerComponent,
    CardNameHostComponent,
    CardNameComponent,
    MessageBoxHostComponent,
    MessageBoxComponent
  ]
})

export class ComponentsModule { }
