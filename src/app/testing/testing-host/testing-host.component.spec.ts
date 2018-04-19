import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestingHostComponent } from './testing-host.component';

describe('TestingHostComponent', () => {
  let component: TestingHostComponent;
  let fixture: ComponentFixture<TestingHostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestingHostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestingHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
