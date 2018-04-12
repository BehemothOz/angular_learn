import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Tasks
import { OneComponent } from './one/one.component';
import { TableHostComponent } from './tasks/table-host/table-host.component';

// Components
import { CounterHostComponent } from './components/counter-host/counter-host.component';
import { TimerHostComponent } from './components/timer-host/timer-host.component';
import { CardNameHostComponent } from './components/card-name-host/card-name-host.component';
import { MessageBoxHostComponent } from './components/message-box-host/message-box-host.component';

// Lifecycle
import { OninitSampleHostComponent } from './lifecycle/oninit-sample-host/oninit-sample-host.component';
import { OnchangesSampleHostComponent } from './lifecycle/onchanges-sample-host/onchanges-sample-host.component';
import { AlleventSampleHostComponent } from './lifecycle/allevent-sample-host/allevent-sample-host.component';

// Child and Content
import { ViewChildHostComponent } from './child-and-content/view-child-host/view-child-host.component';
import { ViewChildrenHostComponent } from './child-and-content/view-children-host/view-children-host.component';
import { ViewContentHostComponent } from './child-and-content/view-content-host/view-content-host.component';

// Binding
import { InterpolationComponent } from './binding/interpolation/interpolation.component';
import { PropertyBindingComponent } from './binding/property-binding/property-binding.component';
import { EventBindingComponent } from './binding/event-binding/event-binding.component';
import { AttributeBindingComponent } from './binding/attribute-binding/attribute-binding.component';
import { ClassBindingComponent } from './binding/class-binding/class-binding.component';
import { StyleBindingComponent } from './binding/style-binding/style-binding.component';

const routes: Routes = [
  { path: '', redirectTo: 'one', pathMatch: 'full' },
  { path: 'one', component: OneComponent },
  { path: 'table', component: TableHostComponent },
  { path: 'counter', component: CounterHostComponent },
  { path: 'timer', component: TimerHostComponent },
  { path: 'card-name', component: CardNameHostComponent },
  { path: 'message-box', component: MessageBoxHostComponent },
  { path: 'oninit-sample', component: OninitSampleHostComponent },
  { path: 'onchange-sample', component: OnchangesSampleHostComponent },
  { path: 'allevent-sample', component: AlleventSampleHostComponent },
  { path: 'view-child', component: ViewChildHostComponent },
  { path: 'view-children', component: ViewChildrenHostComponent },
  { path: 'view-content', component: ViewContentHostComponent },
  { path: 'interpolation', component: InterpolationComponent },
  { path: 'property-binding', component: PropertyBindingComponent },
  { path: 'event-binding', component: EventBindingComponent },
  { path: 'attribute-binding', component: AttributeBindingComponent },
  { path: 'class-binding', component: ClassBindingComponent },
  { path: 'style-binding', component: StyleBindingComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
