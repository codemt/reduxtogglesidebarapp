import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Dashboard05Component } from './dashboard05.component';

describe('Dashboard05Component', () => {
  let component: Dashboard05Component;
  let fixture: ComponentFixture<Dashboard05Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Dashboard05Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Dashboard05Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
