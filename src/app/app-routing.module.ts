import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OneComponent } from './one/one.component';
import { CounterHostComponent } from './components/counter-host/counter-host.component';
import { TimerHostComponent } from './components/timer-host/timer-host.component';
import { CardNameHostComponent } from './components/card-name-host/card-name-host.component';
import { MessageBoxHostComponent } from './components/message-box-host/message-box-host.component';

const routes: Routes = [
  { path: '', redirectTo: 'one', pathMatch: 'full' },
  { path: 'one', component: OneComponent },
  { path: 'counter-host', component: CounterHostComponent },
  { path: 'timer-host', component: TimerHostComponent },
  { path: 'card-name-host', component: CardNameHostComponent },
  { path: 'message-box-host', component: MessageBoxHostComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
