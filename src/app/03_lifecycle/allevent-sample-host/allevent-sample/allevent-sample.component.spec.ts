import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlleventSampleComponent } from './allevent-sample.component';

describe('AlleventSampleComponent', () => {
  let component: AlleventSampleComponent;
  let fixture: ComponentFixture<AlleventSampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlleventSampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlleventSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
