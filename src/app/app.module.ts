import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ClarityModule } from "@clr/angular";
import { AppRoutingModule } from './/app-routing.module';

import { ComponentsModule } from "./components/components.module";
import { LifecycleModule } from "./lifecycle/lifecycle.module";
import { ChildAndContentModule  } from "./child-and-content/child-and-content.module";

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
    ChildAndContentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
