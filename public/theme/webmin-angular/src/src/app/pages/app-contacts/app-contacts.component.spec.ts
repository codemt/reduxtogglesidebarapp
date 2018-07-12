import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppContactsComponent } from './app-contacts.component';

describe('AppContactsComponent', () => {
  let component: AppContactsComponent;
  let fixture: ComponentFixture<AppContactsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppContactsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppContactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
