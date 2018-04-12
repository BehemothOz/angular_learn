import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardNameHostComponent } from './card-name-host.component';

describe('CardNameHostComponent', () => {
  let component: CardNameHostComponent;
  let fixture: ComponentFixture<CardNameHostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardNameHostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardNameHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
