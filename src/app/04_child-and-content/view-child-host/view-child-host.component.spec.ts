import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewChildHostComponent } from './view-child-host.component';

describe('ViewChildHostComponent', () => {
  let component: ViewChildHostComponent;
  let fixture: ComponentFixture<ViewChildHostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewChildHostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewChildHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
