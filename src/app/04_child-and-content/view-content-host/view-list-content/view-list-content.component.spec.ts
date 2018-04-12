import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewListContentComponent } from './view-list-content.component';

describe('ViewListContentComponent', () => {
  let component: ViewListContentComponent;
  let fixture: ComponentFixture<ViewListContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewListContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewListContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
