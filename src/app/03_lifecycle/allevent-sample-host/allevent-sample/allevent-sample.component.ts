import { Component, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-allevent-sample',
  templateUrl: './allevent-sample.component.html',
  styleUrls: ['./allevent-sample.component.css']
})
export class AlleventSampleComponent implements OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  
  // Срабатывает, когда Angular устанавливает значение для input свойства. 
  // Метод может получать объект типа SimpleChange с информацией о новом и старом значениях.
  // Срабатывает до ngOnInit и каждый раз, когда меняется значение input свойства.
  ngOnChanges() {
    console.group('ngOnChanges');
    console.log('ngOnChanges');
    console.groupEnd();
  }

  // Инициализация angular компонента или директивы. Вызывается один раз после того как компонент отобразится.
  ngOnInit() {
    console.group('ngOnInit');
    console.log('ngOnInit');
    console.groupEnd();
  }

  // Срабатывает при каждой проверке изменений. Срабатывает часто.
  ngDoCheck() {
    console.group('ngDoCheck');
    console.log('ngDoCheck');
    console.groupEnd();
  }

  // Срабатывает после того как Angular внедряет внешнее содержимое в представление компонента.
  // Используется только при работе с компонентами.
  ngAfterContentInit() {
    console.group('ngAfterContentInit');
    console.log('ngAfterContentInit');
    console.groupEnd();
  }

  // Срабатывает после каждой проверки внедренного контента в представление компонента
  // срабатывает после ngAfterContentInit и после каждого ngDoCheck
  // Используется только при работе с компонентами.
  ngAfterContentChecked() {
    console.group('ngAfterContentChecked');
    console.log('ngAfterContentChecked');
    console.groupEnd();
  }

  // Срабатывает после инициализации представления компонента и дочерних компонентов.
  // Запускается один раз после ngAfterContentChecked
  // Используется только при работе с компонентами.
  ngAfterViewInit() {
    console.group('ngAfterViewInit');
    console.log('ngAfterViewInit');
    console.groupEnd();
  }

  // Срабатывает после того как Angular проверит представление компонента и все дочерние компоненты
  // Запускается после ngAfterViewInit и после каждого ngAfterContentChecked
  // Используется только при работе с компонентами.
  ngAfterViewChecked() {
    console.group('ngAfterViewChecked');
    console.log('ngAfterViewChecked');
    console.groupEnd();
  }

  // Срабатывает сразу после уничтожения компонента или директивы
  ngOnDestroy() {
    console.group('ngOnDestroy');
    console.log('ngOnDestroy');
    console.groupEnd();
  }

  test() {
    console.log('test method');
  }
}
