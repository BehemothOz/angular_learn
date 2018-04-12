import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OninitSampleComponent } from './oninit-sample.component';

describe('OninitSampleComponent', () => {
  let component: OninitSampleComponent;
  let fixture: ComponentFixture<OninitSampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OninitSampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OninitSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
