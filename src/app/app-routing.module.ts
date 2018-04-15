import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Tasks
import { OneComponent } from './one/one.component';
import { TableHostComponent } from './00_tasks/table-host/table-host.component';

// Components
import { CounterHostComponent } from './01_components/counter-host/counter-host.component';
import { TimerHostComponent } from './01_components/timer-host/timer-host.component';
import { CardNameHostComponent } from './01_components/card-name-host/card-name-host.component';
import { MessageBoxHostComponent } from './01_components/message-box-host/message-box-host.component';

// Lifecycle
import { OninitSampleHostComponent } from './03_lifecycle/oninit-sample-host/oninit-sample-host.component';
import { OnchangesSampleHostComponent } from './03_lifecycle/onchanges-sample-host/onchanges-sample-host.component';
import { AlleventSampleHostComponent } from './03_lifecycle/allevent-sample-host/allevent-sample-host.component';

// Child and Content
import { ViewChildHostComponent } from './04_child-and-content/view-child-host/view-child-host.component';
import { ViewChildrenHostComponent } from './04_child-and-content/view-children-host/view-children-host.component';
import { ViewContentHostComponent } from './04_child-and-content/view-content-host/view-content-host.component';

// Binding
import { InterpolationComponent } from './05_binding/01_interpolation/interpolation.component';
import { PropertyBindingComponent } from './05_binding/02_property-binding/property-binding.component';
import { EventBindingComponent } from './05_binding/03_event-binding/event-binding.component';
import { AttributeBindingComponent } from './05_binding/04_attribute-binding/attribute-binding.component';
import { ClassBindingComponent } from './05_binding/05_class-binding/class-binding.component';
import { StyleBindingComponent } from './05_binding/06_style-binding/style-binding.component';

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
