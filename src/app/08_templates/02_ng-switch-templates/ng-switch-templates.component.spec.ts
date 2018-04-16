import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgSwitchTemplatesComponent } from './ng-switch-templates.component';

describe('NgSwitchTemplatesComponent', () => {
  let component: NgSwitchTemplatesComponent;
  let fixture: ComponentFixture<NgSwitchTemplatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgSwitchTemplatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgSwitchTemplatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
