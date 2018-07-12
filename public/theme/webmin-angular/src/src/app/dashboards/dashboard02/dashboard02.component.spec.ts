import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Dashboard02Component } from './dashboard02.component';

describe('Dashboard02Component', () => {
  let component: Dashboard02Component;
  let fixture: ComponentFixture<Dashboard02Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Dashboard02Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Dashboard02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
