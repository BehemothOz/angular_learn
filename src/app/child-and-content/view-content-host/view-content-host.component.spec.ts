import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewContentHostComponent } from './view-content-host.component';

describe('ViewContentHostComponent', () => {
  let component: ViewContentHostComponent;
  let fixture: ComponentFixture<ViewContentHostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewContentHostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewContentHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
