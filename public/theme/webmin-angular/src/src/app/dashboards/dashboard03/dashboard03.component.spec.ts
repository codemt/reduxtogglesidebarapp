import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Dashboard03Component } from './dashboard03.component';

describe('Dashboard03Component', () => {
  let component: Dashboard03Component;
  let fixture: ComponentFixture<Dashboard03Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Dashboard03Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Dashboard03Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
