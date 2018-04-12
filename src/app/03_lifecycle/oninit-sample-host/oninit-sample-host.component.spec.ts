import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OninitSampleHostComponent } from './oninit-sample-host.component';

describe('OninitSampleHostComponent', () => {
  let component: OninitSampleHostComponent;
  let fixture: ComponentFixture<OninitSampleHostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OninitSampleHostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OninitSampleHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
