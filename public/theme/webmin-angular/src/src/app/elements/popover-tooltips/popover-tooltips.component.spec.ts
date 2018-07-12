import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopoverTooltipsComponent } from './popover-tooltips.component';

describe('PopoverTooltipsComponent', () => {
  let component: PopoverTooltipsComponent;
  let fixture: ComponentFixture<PopoverTooltipsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopoverTooltipsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopoverTooltipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
