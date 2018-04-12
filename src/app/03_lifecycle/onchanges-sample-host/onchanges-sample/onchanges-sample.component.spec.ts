import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnchangesSampleComponent } from './onchanges-sample.component';

describe('OnchangesSampleComponent', () => {
  let component: OnchangesSampleComponent;
  let fixture: ComponentFixture<OnchangesSampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnchangesSampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnchangesSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
