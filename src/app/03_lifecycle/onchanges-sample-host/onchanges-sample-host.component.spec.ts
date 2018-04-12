import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnchangesSampleHostComponent } from './onchanges-sample-host.component';

describe('OnchangesSampleHostComponent', () => {
  let component: OnchangesSampleHostComponent;
  let fixture: ComponentFixture<OnchangesSampleHostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnchangesSampleHostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnchangesSampleHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
