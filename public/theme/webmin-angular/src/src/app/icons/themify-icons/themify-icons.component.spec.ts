import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemifyIconsComponent } from './themify-icons.component';

describe('ThemifyIconsComponent', () => {
  let component: ThemifyIconsComponent;
  let fixture: ComponentFixture<ThemifyIconsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThemifyIconsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemifyIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
