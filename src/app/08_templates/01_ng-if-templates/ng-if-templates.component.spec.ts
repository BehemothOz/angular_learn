import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgIfTemplatesComponent } from './ng-if-templates.component';

describe('NgIfTemplatesComponent', () => {
  let component: NgIfTemplatesComponent;
  let fixture: ComponentFixture<NgIfTemplatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgIfTemplatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgIfTemplatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
