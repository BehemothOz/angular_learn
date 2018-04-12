import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ClarityModule } from "@clr/angular";
import { AppRoutingModule } from './/app-routing.module';

import { ComponentsModule } from "./01_components/components.module";
import { LifecycleModule } from "./03_lifecycle/lifecycle.module";
import { ChildAndContentModule  } from "./04_child-and-content/child-and-content.module";
import { BindingModule } from './05_binding/binding.module';
import { TasksModule } from './00_tasks/tasks.module';

import { AppComponent } from './app.component';
import { OneComponent } from './one/one.component';

@NgModule({
  declarations: [
    AppComponent,
    OneComponent
  ],
  imports: [
    BrowserModule,
    ClarityModule,
    AppRoutingModule,
    ComponentsModule,
    LifecycleModule,
    ChildAndContentModule,
    BindingModule,
    TasksModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
