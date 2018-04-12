import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewChildrenHostComponent } from './view-children-host.component';

describe('ViewChildrenHostComponent', () => {
  let component: ViewChildrenHostComponent;
  let fixture: ComponentFixture<ViewChildrenHostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewChildrenHostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewChildrenHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
