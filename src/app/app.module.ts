import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ClarityModule } from "@clr/angular";
import { AppRoutingModule } from './/app-routing.module';

import { ComponentsModule } from "./components/components.module";

import { AppComponent } from './app.component';
import { OneComponent } from './one/one.component';
// import { TwoComponent } from './two/two.component';
// import { ThreeComponent } from './three/three.component';


@NgModule({
  declarations: [
    AppComponent,
    OneComponent
  ],
  imports: [
    BrowserModule,
    ClarityModule,
    AppRoutingModule,
    ComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
