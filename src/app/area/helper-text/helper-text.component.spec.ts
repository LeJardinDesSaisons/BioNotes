import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelperTextComponent } from './helper-text.component';

describe('HelperTextComponent', () => {
  let component: HelperTextComponent;
  let fixture: ComponentFixture<HelperTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelperTextComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelperTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
