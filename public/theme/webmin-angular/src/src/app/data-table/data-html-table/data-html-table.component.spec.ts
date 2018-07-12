import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataHtmlTableComponent } from './data-table.component';

describe('DataHtmlTableComponent', () => {
  let component: DataHtmlTableComponent;
  let fixture: ComponentFixture<DataHtmlTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataHtmlTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataHtmlTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
