import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlleventSampleHostComponent } from './allevent-sample-host.component';

describe('AlleventSampleHostComponent', () => {
  let component: AlleventSampleHostComponent;
  let fixture: ComponentFixture<AlleventSampleHostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlleventSampleHostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlleventSampleHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
