import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Dashboard04Component } from './dashboard04.component';

describe('Dashboard04Component', () => {
  let component: Dashboard04Component;
  let fixture: ComponentFixture<Dashboard04Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Dashboard04Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Dashboard04Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
