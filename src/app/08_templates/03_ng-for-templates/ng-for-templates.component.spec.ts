import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgForTemplatesComponent } from './ng-for-templates.component';

describe('NgForTemplatesComponent', () => {
  let component: NgForTemplatesComponent;
  let fixture: ComponentFixture<NgForTemplatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgForTemplatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgForTemplatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
