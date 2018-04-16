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

// Two Way Databinding
import { NgModelComponent } from './06_two-way-databinding/ng-model/ng-model.component';
import { NgModelInsideComponent } from './06_two-way-databinding/ng-model-inside/ng-model-inside.component';

// Built in Directives
import { NgClassComponent } from './07_built-in-directives/01_ng-class/ng-class.component';
import { NgStyleComponent } from './07_built-in-directives/02_ng-style/ng-style.component';
import { NgIfComponent } from './07_built-in-directives/03_ng-if/ng-if.component';
import { NgSwitchComponent } from './07_built-in-directives/04_ng-switch/ng-switch.component';
import { NgForComponent } from './07_built-in-directives/05_ng-for/ng-for.component';

// Templates
import { NgIfTemplatesComponent } from './08_templates/01_ng-if-templates/ng-if-templates.component';
import { NgSwitchTemplatesComponent } from './08_templates/02_ng-switch-templates/ng-switch-templates.component';
import { NgForTemplatesComponent } from './08_templates/03_ng-for-templates/ng-for-templates.component';
import { TempRefVarComponent } from './08_templates/04_temp-ref-var/temp-ref-var.component';

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
  { path: 'style-binding', component: StyleBindingComponent },

  { path: 'ng-model', component: NgModelComponent },
  { path: 'ng-model-inside', component: NgModelInsideComponent },
  
  { path: 'ng-class', component: NgClassComponent },
  { path: 'ng-style', component: NgStyleComponent },
  { path: 'ng-if', component: NgIfComponent },
  { path: 'ng-switch', component: NgSwitchComponent },
  { path: 'ng-for', component: NgForComponent },

  { path: 'ng-if-templates', component: NgIfTemplatesComponent },
  { path: 'ng-switch-templates', component: NgSwitchTemplatesComponent },
  { path: 'ng-for-templates', component: NgForTemplatesComponent },
  { path: 'temp-ref-var', component: TempRefVarComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
