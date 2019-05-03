import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditOperationPage } from './edit-operation.page';

describe('EditOperationPage', () => {
  let component: EditOperationPage;
  let fixture: ComponentFixture<EditOperationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditOperationPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditOperationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
