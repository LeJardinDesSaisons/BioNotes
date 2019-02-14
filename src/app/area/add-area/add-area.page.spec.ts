import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAreaPage } from './add-area.page';

describe('AddAreaPage', () => {
  let component: AddAreaPage;
  let fixture: ComponentFixture<AddAreaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddAreaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAreaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
