import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from './data.service';
import { SimpleServiceComponent } from './simple-service/simple-service.component';
import { ServiceHierarchyComponent } from './service-hierarchy/service-hierarchy.component';
import { Counter1Component } from './service-hierarchy/counter1/counter1.component';
import { Counter2Component } from './service-hierarchy/counter2/counter2.component';
import { Counter3Component } from './service-hierarchy/counter3/counter3.component';

// Инжектор создается при запуске приложения.
// Для корректной работы инжектор нужно сконфигурировать, зарегистрировав провайдеров, которые создают сервисы необходимые приложению.
// З�, CounterHostComponent�, Counter1Component, Counter2Component, Counter3Component, ServiceHierarchyComponent, Counter1Component, Counter2Component, Counter4Component, Counter3Componentрегистрировать провайдер можно на уровне модуля или компонента приложения.

@NgModule({
  imports: [CommonModule],
  declarations: [
    SimpleServiceComponent, 
    ServiceHierarchyComponent, 
    Counter1Component,
    Counter2Component,
    Counter3Component
  ],
  providers: [DataService]
})
export class ServiceModule { }
