import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOperationPage } from './add-operation.page';

describe('AddOperationPage', () => {
  let component: AddOperationPage;
  let fixture: ComponentFixture<AddOperationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddOperationPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddOperationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
