import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectAreaPage } from './select-area.page';

describe('SelectAreaPage', () => {
  let component: SelectAreaPage;
  let fixture: ComponentFixture<SelectAreaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectAreaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectAreaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
