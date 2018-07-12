import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NicescrollComponent } from './nicescroll.component';

describe('NicescrollComponent', () => {
  let component: NicescrollComponent;
  let fixture: ComponentFixture<NicescrollComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NicescrollComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NicescrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
