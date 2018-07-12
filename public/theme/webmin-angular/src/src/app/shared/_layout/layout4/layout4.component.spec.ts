import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Layout4Component } from './layout4.component';

describe('Layout4Component', () => {
  let component: Layout4Component;
  let fixture: ComponentFixture<Layout4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Layout4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Layout4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
