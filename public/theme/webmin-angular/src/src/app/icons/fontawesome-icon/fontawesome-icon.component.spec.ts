import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FontawesomeIconComponent } from './fontawesome-icon.component';

describe('FontawesomeIconComponent', () => {
  let component: FontawesomeIconComponent;
  let fixture: ComponentFixture<FontawesomeIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FontawesomeIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FontawesomeIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
